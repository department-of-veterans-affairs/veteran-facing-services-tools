import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import '../scss/main.scss';

/**
 * Layout
 *
 * @class Layout
 * @extends {React.Component}
 */
class Layout extends React.Component {
  componentDidMount() {
    window.mermaid_config = { theme: 'default', startOnLoad: true }; // eslint-disable-line camelcase
    const s = document.createElement('script');
    s.setAttribute(
      'src',
      'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js',
    );
    document.head.appendChild(s);

    if (window.mermaid) {
      window.mermaid.init(
        undefined,
        document.getElementsByClassName('mermaid'),
      );
    }
  }

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
            <Header location={location} />
            {children}
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
