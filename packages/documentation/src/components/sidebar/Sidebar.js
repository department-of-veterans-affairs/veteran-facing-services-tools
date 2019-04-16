import React from 'react';
import SidebarItems from './SidebarItems';
import sidebarData from '../../sidebar';

/**
 * Sidebar
 *
 * @param {props} props
 */

export default function Sidebar({ location }) {
  const sidebarSection = sidebarData.sections.find(section =>
    location.pathname.includes(section.href),
  );

  if (!sidebarSection) {
    return null;
  }

  return (
    <div className="vads-l-col--4 site-c-content__nav">
      <div className="site-c-sidenav">
        <SidebarItems items={sidebarSection.items} />
      </div>
    </div>
  );
}
