/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `VA.gov Developer's Documentations`,
    description: `Resources and documention for the Development within the VA.gov project`,
  },
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
