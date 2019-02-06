import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Sidebar from '../components/sidebar';
import './layout.scss';

/**
 * Layout
 *
 * @class Layout
 * @extends {React.Component}
 */
class Layout extends React.Component {
  getSitePages(pages) {
    // removing the index from the list
    return pages.filter(page => page.node.fields.slug !== '/');
  }

  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }

            allMarkDown: allMarkdownRemark(filter: {
              fields: {
                slug: {
                  ne: "undefined"
                }
              }
            }) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }

            pages: allMdx(
              filter: {
                fields: {
                  sourceInstanceName: {
                    eq: "pages"
                  }
                }
              }, sort: {
                fields: [
                  frontmatter___title
                ],
                order: ASC
              }) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                    sourceInstanceName
                  }
                  parent {
                    ... on File {
                      name
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }

            components: allMdx(
              filter: {
                fields: {
                  sourceInstanceName: {
                    eq: "components"
                  }
                }
              }, sort: {
                fields: [
                  frontmatter___title
                ],
                order: ASC
              }) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                    sourceInstanceName
                  }
                  parent {
                    ... on File {
                      name
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>'
          '<Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content:
                    'Template for creating design system documentatation',
              },
              {
                name: 'keywords',
                content: 'design system, style guide, documentation',
              },
            ]}>

            <html lang="en"/>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
              integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
              crossOrigin="anonymous"/>
          </Helmet>'
          '<Sidebar
            pages={this.getSitePages(data.pages.edges)}
            components={data.components.edges}
            siteTitle={data.site.siteMetadata.title}
            allMarkDown={data.allMarkDown.edges}/>'

            '<div className="ContentArea">{children}</div>'
          '</>
        )}/>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
