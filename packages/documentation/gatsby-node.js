/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// Base URL for a GitHub link to the source of a page *from this repo*.
const GITHUB_FILE_BASE_URL = 'https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master';

/**
 * Creates pages for formation-react docs that were pulled
 * with gatsby-source-filesystem.
 */
const createFormationReactPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allMdx(filter: { fields: { sourceInstanceName: { eq: "formation-react" } } }) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                name
                tags
                title
              }
              parent {
                ... on File {
                  name
                  relativePath
                }
              }
              fields {
                sourceInstanceName
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(
      'Error querying for formation-react mdx',
      new Error(result.errors),
    );
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const sourceUrl = `${GITHUB_FILE_BASE_URL}/packages/formation-react/src/components/${node.parent.relativePath}`;

    createPage({
      path: `/visual-design/components/${node.parent.name.toLowerCase()}/`,
      component: path.resolve('./src/templates/FormationReactTemplate.jsx'),
      context: {
        id: node.id,
        source: node.fields.sourceInstanceName,
        sourceUrl,
        frontmatter: node.frontmatter,
        name: node.frontmatter.name,
      },
    });
  });
};

/**
 * Creates pages for va.gov-team docs that were pulled with gatsby-source-git.
 */
const createVaGovTeamPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
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
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      'Error querying for va.gov-team md files',
      new Error(result.errors),
    );
  }

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

    // Use the top level heading as the title.
    const title = headings && headings[0] && headings[0].value;

    // Build the full link to the document.
    const sourceUrl = `${repositoryUrl}/blob/${branch}/${relativePath}`;

    createPage({
      path: `${relativeDirectory}/${name}`,
      component: path.resolve('./src/templates/VaGovTeamTemplate.jsx'),
      context: {
        html,
        source,
        sourceUrl,
        title,
      },
    });
  });
};

/**
 * Derive and include the source URL on automatically generated pages,
 * specifically from src/pages.
 *
 * External pages, such as those pulled from va.gov-team or formation-react,
 * should already have sources and also source URLs associated with them.
 */
const setSourceUrl = ({ page, actions, reporter }) => {
  if (page.context.sourceUrl) return;

  // For debugging, log if an externally sourced page is missing the URL.
  if (page.context.source) {
    reporter.warn(`No source URL found for external page: ${page}`);
    return;
  }

  // Check if this page is sourced from src/pages.
  const { createPage, deletePage } = actions;
  const match = page.componentPath && page.componentPath.match(
    `/packages/documentation/src/pages/.+`
  );

  // Avoid setting source URLs that we can't confidently determine.
  if (!match) return;

  // Build the source URL once we've determined that the page is from src/pages.
  const [relativePath] = match;
  const sourceUrl = `${GITHUB_FILE_BASE_URL}${relativePath}`;

  deletePage(page);

  createPage({
    ...page,
    context: {
      ...page.context,
      sourceUrl,
    },
  });
};


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const parent = getNode(node.parent);

  // Enable filtering MDX nodes by source.
  if (node.internal.type === 'Mdx' && parent.sourceInstanceName) {
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: parent.sourceInstanceName,
    });
  }
};

exports.createPages = async helpers => {
  await createFormationReactPages(helpers);
  await createVaGovTeamPages(helpers);
};

exports.onCreatePage = helpers => {
  setSourceUrl(helpers);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
