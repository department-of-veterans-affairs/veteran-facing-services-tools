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
    } else if (parent.sourceInstanceName === 'pages') {
      createNodeField({
        node,
        name: `slug`,
        value: `${parent.relativePath.replace('.md', '')}`,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `{
          allMarkDown: allMarkdownRemark {
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
                frontmatter {
                  title
                }
                parent {
                  ... on File {
                    name
                    sourceInstanceName
                  }
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
          if (node.parent.sourceInstanceName === 'pages') {
            createPage({
              path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,
              component: path.resolve('./src/layouts/external-layout.js'),
              context: {
                id: node.id,
                name: node.frontmatter.title.toLowerCase().replace(/ /g, '-'),
              },
            })
          } else if (node.fields && node.fields.slug) {
            createPage({
              path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,
              component: path.resolve('./src/layouts/external-layout.js'),
              context: {
                id: node.id,
                name: node.fields.slug,
              },
            })
          }
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
