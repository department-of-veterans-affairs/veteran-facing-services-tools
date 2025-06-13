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
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-T2ZTDXZ',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        failOn: 'none',
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vagov-documentation`,
        short_name: `vagov-documentation`,
        start_url: `/`,
        icons: [],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
          {
            resolve: 'gatsby-remark-mermaid',
          },
        ],
      },
    },
    `gatsby-transformer-react-docgen`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          SitePage: {
            title: node => {
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
                // Use a derived title for docs pulled from external sources.
                return node.context.title;
              }

              console.info('Page title missing from front matter.', node);
              return '';
            },
            tags: node => {
              if (
                node.context &&
                node.context.frontmatter &&
                node.context.frontmatter.tags
              ) {
                return node.context.frontmatter.tags;
              }

              return '';
            },
            path: node => node.path,
          },
        },
      },
    },
  ],
};
