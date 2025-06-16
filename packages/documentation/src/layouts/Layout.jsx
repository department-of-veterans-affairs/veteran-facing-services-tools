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


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
