/* eslint-disable */
const path = require('path');

module.exports = {
  siteMetadata: {
    description: `Resources and documentation for Development within the VA.gov project`,
    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,
    title: `VA.gov | Client Application Documentation`,
    sidebar: require('./src/sidebar.js'),
  },
  pathPrefix: '/veteran-facing-services-tools',
  plugins: [
    {
      resolve: 'gatsby-source-git',
      options: {
        name: 'va.gov-team',
        remote:
          'https://github.com/department-of-veterans-affairs/va.gov-team.git',
        branch: 'master',
        patterns: 'platform/working-with-vsp/**',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vagov-documentation`,
        short_name: `vagov-documentation`,
        start_url: `/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `../formation-react/src/components`,
        name: 'components',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        mediaTypes: ['text/x-markdown'],
        defaultLayouts: {
          default: require.resolve('./src/layouts/SidebarLayout.jsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-mermaid',
          },
          {
            resolve: 'gatsby-remark-slug',
          },
        ],
      },
    },
    `gatsby-transformer-react-docgen`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // `github-api-pages`,
    `mdx-pages`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          SitePage: {
            title: (node) => {
              if (
                node.context &&
                node.context.frontmatter &&
                node.context.frontmatter.title
              ) {
                return node.context.frontmatter.title;
              } else if (
                node.context &&
                node.context.sourceUrl &&
                node.context.title
              ) {
                // Search by title derived from documents pulled from the GitHub repo.
                return node.context.title;
              } else {
                console.info('Page title missing from front matter.', node);
              }

              return '';
            },
            tags: (node) => {
              if (
                node.context &&
                node.context.frontmatter &&
                node.context.frontmatter.tags
              ) {
                return node.context.frontmatter.tags;
              }

              return '';
            },
            path: (node) => node.path,
          },
        },
      },
    },
  ],
};
