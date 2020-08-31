/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

/**
 * Creates pages for va.gov-team docs that were pulled with gatsby-source-git.
 */
const createVaGovTeamPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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
    const { headings, html } = node.childMarkdownRemark;

    // Don't create pages for empty files.
    if (!html) return;

    const {
      gitRemote: {
        webLink: repositoryUrl,
        ref: branch,
      },
      name,
      relativeDirectory,
      relativePath,
      sourceInstanceName: source,
    } = node;

    // Use the top heading as the title.
    const title = headings && headings[0] && headings[0].value;

    // Build the full link to the document.
    const sourceUrl = `${repositoryUrl}/blob/${branch}/${relativePath}`;

    createPage({
      path: `${relativeDirectory}/${name}`,
      component: path.resolve('./src/templates/page.js'),
      context: {
        html,
        source,
        sourceUrl,
        title,
      },
    });
  });
};

exports.createPages = async helpers => {
  await createVaGovTeamPages(helpers);
};
