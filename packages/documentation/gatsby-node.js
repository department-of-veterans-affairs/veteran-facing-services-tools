/* eslint-disable */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const githubApi = require('./services/github-api')

exports.sourceNodes = async ({
  actions,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = actions
  const repoData = {
    owner: 'department-of-veterans-affairs',
    repo: 'vets.gov-team',
  }

  // await githubApi.getDirectoryAndCreatePages({
  //   ...repoData,
  //   dir: 'Work Practices',
  // }, createNode);

  await githubApi.getDirectoryAndCreatePages({
      ...repoData,
      dir: 'Work Practices/Accessibility and 508',
    },
    createNode,
  );

  await githubApi.getPageAndCreatePage({
      ...repoData,
      dir: 'Work Practices/Accessibility and 508/meeting-notes/2017-06-05-meeting-508-office.md',
    },
    createNode,
  );
}

exports.onCreateNode = ({node, getNode, actions }) => {
  const { createNodeField } = actions
  const parent = getNode(node.parent);

  if (node.internal.type === `Mdx`) {
    if (parent.name) {
      if (parent.name === 'index') {
        createNodeField({
          node,
          name: `slug`,
          value: `/`,
        })
      } else {
        createNodeField({
          node,
          name: `slug`,
          value: `/${parent.name.toLowerCase()}/`,
        })
      }

      createNodeField({
        node,
        name: `sourceInstanceName`,
        value: `${parent.sourceInstanceName}`,
      })
    }
  } else if (node.internal.type === `MarkdownRemark`) {
    if (parent.internal.directory) {
      createNodeField({
        node,
        name: `slug`,
        value: `${parent.internal.directory}/${parent.internal.name}`,
      })

      createNodeField({
        node,
        name: `path`,
        value: `${parent.internal.directory}`,
      })

      createNodeField({
        node,
        name: `fileName`,
        value: `${parent.internal.name}`,
      })
    } else {
      createNodeField({
        node,
        name: `slug`,
        value: `${parent.internal.name}`,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `{
      allMarkDown: allMarkdownRemark(filter: {
        fields: {
          slug: {
            ne: "undefined"
          }
        }
      }) {
        edges {
          node {
            id
            fields {
              slug
              path
              fileName
            }
            internal {
              content
              type
            }
          }
        }
      }

      allMdx: allMdx(filter: {
        frontmatter: {
          name: {
            ne: null
          }
        }
      }) {
        edges {
          node {
            id
            frontmatter {
              title
              name
            }
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            code {
              scope
            }
          }
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      console.error(result.errors)
      throw new Error('Error querying for custom pages');
    }

    result.data.allMarkDown.edges.forEach(async ({ node }) => {
      createPage({
        path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,
        component: path.resolve('./src/layouts/external-layout.js'),
        context: {
          id: node.id,
          name: node.fields.slug,
        },
      })
    })

    result.data.allMdx.edges.forEach(async ({ node }) => {
      if (node.frontmatter.name) {
        createPage({
          path: `/platform/${node.parent.name.toLowerCase()}/`,
          component: path.resolve('./src/layouts/module-components.js'),
          context: {
            id: node.id,
            source: 'component',
            name: node.frontmatter.name,
          },
        })
      }
    })
  });
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//       alias: {
//         components: path.resolve('../formation-react/src/components'),
//       },
//     },
//   });
// };
