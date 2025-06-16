import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Head from '../components/seo';
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
            <Header location={location} />
            {children}
          </>
        )}
      />
    );
  }
}

// Export the Head component for Gatsby to use
export function Head({ data = { site: { siteMetadata: { title: 'VA.gov | Client Application Documentation' } } } }) {
  return (
    <Head
      title={data.site.siteMetadata.title}
      overrideTitle={true}
      meta={[
        {
          name: 'description',
          content: 'Template for creating design system documentatation',
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
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
