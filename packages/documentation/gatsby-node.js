/* eslint-disable */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allFile(
        filter: {
          internal: {
            mediaType: {
              eq: "text/markdown"
            }
          }
          sourceInstanceName: {
            eq: "va.gov-team"
          }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              headings {
                value
              }
              html
            }
            gitRemote {
              ref
              webLink
            }
            internal {
              mediaType
            }
            name
            relativeDirectory
            relativePath
            sourceInstanceName
          }
        }
      }
    }
  `);

  result.data.allFile.edges.forEach(({ node }) => {
    const {
      webLink: repositoryUrl,
      ref: branch,
    } = node.gitRemote;

    const { headings, html } = node.childMarkdownRemark;

    const title = headings && headings[0] && headings[0].value;

    // Link to GitHub document.
    const sourceUrl = `${repositoryUrl}/blob/${branch}/${node.relativePath}`;

    createPage({
      path: `${node.relativeDirectory}/${node.name}`,
      component: path.resolve('./src/templates/page.js'),
      context: {
        html,
        sourceUrl,
        title,
      },
    })
  });
};
