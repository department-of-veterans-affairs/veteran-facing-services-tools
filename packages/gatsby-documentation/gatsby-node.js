/* eslint-disable */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const crypto = require('crypto')
const GithubGraphQLApi = require('node-github-graphql')

const github = new GithubGraphQLApi({
  token: process.env.GITHUB_API_KEY,
})

exports.sourceNodes = async ({
  boundActionCreators,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = boundActionCreators

  const response = await github.query(`
    {
      repository(owner: "department-of-veterans-affairs", name:"vets.gov-team"){
        id
        name
        object (expression: "master:Work Practices"){
          ... on Tree {
            entries {
              oid
              name
              object {
                ... on Tree {
                  entries {
                    oid
                    name
                    object {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  response
    .data
    .repository
    .object
    .entries.filter(item => item.name.endsWith('.md')).forEach(({name, oid, object}) => {
      createNode({
        id: oid,
        parent: null,
        children: [],
        internal: {
          type: `GithubAPI`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(object.text)
            .digest(`hex`),
          mediaType: `text/markdown`,
          content: object.text,
          name: name.replace('.md', ''),
        }
      })
    })
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
    createNodeField({
      node,
      name: `slug`,
      value: `${parent.internal.name}`,
    })

    createNodeField({
      node,
      name: `path`,
      value: `${parent.internal.name}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
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
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMarkDown.edges.forEach(async ({ node }) => {
          createPage({
            path: `/${node.fields.slug.toLowerCase()}/`,
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
