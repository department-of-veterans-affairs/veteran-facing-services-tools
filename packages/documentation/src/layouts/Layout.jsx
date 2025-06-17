import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Head from '../components/seo';
import '../scss/main.scss';

/**
 * Layout
 */
function Layout({ children, location }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <Header location={location} />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
};

export default Layout;
