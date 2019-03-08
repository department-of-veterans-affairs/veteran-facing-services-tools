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
  const sidebarSection = sidebarData.sections.find(section => location.pathname.includes(`/${section.href}`));

  return (
    <aside className="sidebar">
      <div className="search">
        <div className="input-wrap">
          <input type="search" value="" onChange={() => {}} placeholder="Type to search"/>
        </div>
      </div>

      {!!sidebarSection && (
        <>
          <h1>{ sidebarSection.name }</h1>
          <Link className="home-link" to="">Home</Link>
          <SidebarItems items={sidebarSection.items}/>
        </>
      )}
      {!sidebarSection && (
        <ul className="menu-list">
          {sidebarData.sections.map(section => <li key={section.id}><Link to={section.href}>{section.name}</Link></li>)}
        </ul>
      )}
    </aside>
  );
}
