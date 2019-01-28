import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import './layout.scss'

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

            pages: allMdx(
              filter: {
                frontmatter: {
                  title: {
                    ne: ""
                  }
                }
              }, sort: {
                fields: [
                  fields___sourceInstanceName
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
          <>
            <Helmet
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
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Sidebar
              pages={this.getSitePages(data.pages.edges)}
              siteTitle={data.site.siteMetadata.title}
            />
            <div className="ContentArea">{children}</div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
