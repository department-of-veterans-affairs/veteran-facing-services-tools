/* eslint-disable */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)

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
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
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
          }
        `
      ).then(result => {

        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(async ({ node }) => {
          if (node.frontmatter.name) {
            createPage({
              path: `/${node.parent.name.toLowerCase()}/`,
              component: path.resolve('./src/layouts/module-components.js'),
              context: {
                id: node.id,
                name: node.frontmatter.name,
              },
            })
          }
        })
      })
    )
  })
}

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
