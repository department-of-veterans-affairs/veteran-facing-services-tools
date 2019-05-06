const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const parent = getNode(node.parent);

  if (node.internal.type === `Mdx`) {
    if (parent.name) {
      if (parent.name === 'index') {
        createNodeField({
          node,
          name: `slug`,
          value: `/`,
        });
      } else {
        createNodeField({
          node,
          name: `slug`,
          value: `/${parent.name.toLowerCase()}/`,
        });
      }

      createNodeField({
        node,
        name: `sourceInstanceName`,
        value: `${parent.sourceInstanceName}`,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMdx(filter: { frontmatter: { name: { ne: null } } }) {
          edges {
            node {
              id
              frontmatter {
                name
                tags
                title
              }
              parent {
                ... on File {
                  name
                }
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    console.error(result.errors); // eslint-disable-line no-console
    throw new Error('Error querying for custom pages');
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.frontmatter.name) {
      createPage({
        path: `/visual-design/components/${node.parent.name.toLowerCase()}/`,
        component: path.resolve('./src/layouts/module-components.js'),
        context: {
          id: node.id,
          source: 'component',
          frontmatter: {
            ...node.frontmatter,
          },
          name: node.frontmatter.name,
        },
      });
    }
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        components: path.resolve('../formation-react/src/components'),
      },
    },
  });
};
