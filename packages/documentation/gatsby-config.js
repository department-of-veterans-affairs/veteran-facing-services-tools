/* eslint-disable */

module.exports = {
  siteMetadata: {
    description: `Resources and documention for the Development within the VA.gov project`,
    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,
    title: `VA.gov Developer's Documentations`,
  },
  pathPrefix: '/veteran-facing-services-tools',
  plugins: [
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx'],
        mediaTypes: ['text/x-markdown'],
        defaultLayouts: {
          default: require.resolve("./src/layouts/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
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
  ],
}
