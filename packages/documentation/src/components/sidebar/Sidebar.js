import React from 'react';
import { Link } from 'gatsby';
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

  return (
    <div className="vads-l-col--4 site-c-content__nav">
      {!!sidebarSection && <SidebarItems items={sidebarSection.items} />}
      {!sidebarSection && (
        <ul className="site-c-sidenav-list">
          {sidebarData.sections.map(section => (
            <li key={section.id}>
              <Link to={section.href}>{section.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
