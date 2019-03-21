const path  = require('path');
const githubApi = require('./github-api');
const githubPages = require('./pages');

exports.sourceNodes = async ({
  actions,
  getNode,
  hasNodeChanged,
}) => {
  const { createNode } = actions

  await githubApi.getPagesAndCreateNodes(githubPages, createNode);
}

exports.onCreateNode = ({node, getNode, actions }) => {
  const { createNodeField } = actions
  const parent = getNode(node.parent);

  if (node.internal.type === `MarkdownRemark`) {
    if (parent.internal.directory) {
      createNodeField({
        node,
        name: `slug`,
        value: `${parent.internal.directory}/${parent.internal.name}`,
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `{
      allMarkdownRemark(filter: {
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
          }
        }
      }
    }`
  )

  if (result.errors) {
    console.error(result.errors)
    throw new Error('Error querying for custom pages');
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.fields.slug.toLowerCase().replace(/ /g, '-')}/`,
      component: path.resolve('./src/layouts/external-layout.js'),
      context: {
        id: node.id,
        name: node.fields.slug,
      },
    })
  })
}
