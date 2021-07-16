import React from 'react';
import { Link } from 'gatsby';

/**
 * Sidebar
 *
 * @param {props} props
 */

function SidebarItem({ item }) {
  if (item.href) {
    return (
      <li key={item.name}>
        <Link to={item.href}>{item.name}</Link>
      </li>
    );
  }
  return <li key={item.name}>{item.name} (future)</li>;
}

export default function SidebarItems({ items, isSublist = false }) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="site-c-sidenav-list">
      {items.map(item => {
        if (item.items) {
          return (
            <li key={item.name}>
              {isSublist && <SidebarItem item={item} />}
              {!isSublist && <h2 className="heading-level-4">{item.name}</h2>}
              <SidebarItems isSublist items={item.items} />
            </li>
          );
        }
        return <SidebarItem item={item} key={item.name} />;
      })}
    </ul>
  );
}
