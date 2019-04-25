/* eslint-disable */
const path = require('path');

module.exports = {
  siteMetadata: {
    description: `Resources and documention for the Development within the VA.gov project`,
    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,
    title: `VA.gov | Client Applicaiton Documentation`,
    sidebar: require('./src/sidebar.js')
  },
  pathPrefix: '/veteran-facing-services-tools',
  plugins: [
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => {
              console.log(node);
              console.log('test')
              return node.frontmatter.title;
            },
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
          },
        },
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
    {
      resolve: `gatsby-mdx`,
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
              sizeByPixelDensity: true
            }
          },
          {
            resolve: path.resolve(__dirname, './plugins/remark/gatsby-remark-mdx-mermaid'),
          },
          {
            resolve: 'gatsby-remark-slug'
          },
        ],
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `../formation-react/src/components`,
        name: 'components'
      }
    },
    `gatsby-transformer-react-docgen`,
    `gatsby-transformer-remark`,
    `github-api-pages`,
    `mdx-pages`,
  ],
}
