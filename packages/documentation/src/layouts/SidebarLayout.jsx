import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../components/sidebar/Sidebar';
import EditLink from '../components/EditLink';
import Layout from './Layout';

/**
 * SidebarLayout
 *
 * @class SidebarLayout
 * @extends {React.Component}
 */
export default function SidebarLayout({ children, location, pageContext }) {
  return (
    <Layout location={location}>
      <div className="vads-l-row site-l-wrapper">
        <Sidebar location={location} />
        <div
          id="main-content"
          className="vads-l-col--8 site-c-content__content docSearch-content"
        >
          {children}
          <EditLink sourceUrl={pageContext.sourceUrl} />
        </div>
      </div>
    </Layout>
  );
}

SidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
