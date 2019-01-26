/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parentName = getNode(node.parent).name

    if (parentName) {
      if (parentName === 'index') {
        createNodeField({
          node,
          name: `slug`,
          value: `/`,
        })
      } else {
        createNodeField({
          node,
          name: `slug`,
          value: `/${getNode(node.parent).name.toLowerCase()}/`,
        })
      }
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

  // this would be for node modules that use the window var

  // if (stage === "build-html") {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /bad-module/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   })
  // }
};
