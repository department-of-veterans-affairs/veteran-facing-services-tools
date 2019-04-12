import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

/**
 * Sidebar
 *
 * @param {props} props
 */

function ComponentList() {
  return (
    <StaticQuery
      query={graphql`
        query ComponentListQuery {
          components: allSitePage(
            filter: { context: { source: { eq: "component" } } }
          ) {
            edges {
              node {
                path
                context {
                  source
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <SidebarItems
          items={data.components.edges.map(comp => ({
            href: comp.node.path,
            name: comp.node.context.name,
          }))}
        />
      )}
    />
  );
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
              {isSublist && item.name}
              {!isSublist && <h2 className="heading-level-4">{item.name}</h2>}
              <SidebarItems isSublist items={item.items} />
            </li>
          );
        }
        if (item.query === 'componentList') {
          return (
            <li key={item.name}>
              {isSublist && item.name}
              {!isSublist && <h2 className="heading-level-4">{item.name}</h2>}
              <ComponentList />
            </li>
          );
        }
        if (item.href) {
          return (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        }
        return <li key={item.name}>{item.name} (future)</li>;
      })}
    </ul>
  );
}
