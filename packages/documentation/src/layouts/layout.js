import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Sidebar from '../components/sidebar/Sidebar';
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
    const { children, location } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
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
                  name: 'docsearch:language',
                  content: 'en',
                },
                {
                  name: 'docsearch:version',
                  content: '1.0.0',
                },
                {
                  name: 'keywords',
                  content: 'design system, style guide, documentation',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Sidebar location={location} />
            <div className="ContentArea docSearch-content">{children}</div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
