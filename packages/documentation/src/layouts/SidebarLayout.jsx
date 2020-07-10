import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import Sidebar from '../components/sidebar/Sidebar';
import PageFooter from '../components/pageFooter/PageFooter';

/**
 * Layout
 *
 * @class Layout
 * @extends {React.Component}
 */
export default function SidebarLayout({ children, location }) {
  return (
    <Layout location={location}>
      <div className="vads-l-row">
        <Sidebar location={location} />
        <div
          id="main-content"
          className="vads-l-col--8 site-c-content__content docSearch-content"
        >
          {children}
          <PageFooter location={location} />
        </div>
      </div>
    </Layout>
  );
}

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
