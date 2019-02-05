/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: `VA.gov Developer's Documentations`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
          }
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
    {
    resolve: '@dschau/gatsby-source-github',
    options: {
      headers: {
        Authorization: `Bearer 397fe5ca7a59576f7989de977456aaae5ccedbea`,
      },
      queries: [
        `
          {
            repository(owner: "department-of-veterans-affairs", name:"vets.gov-team"){
              id
              name
              object (expression: "master:"){
                ... on Tree {
                  entries {
                    name
                    object {
                      ... on Tree {
                        entries {
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
        `,
      ],
    },
  },
  ],
}
