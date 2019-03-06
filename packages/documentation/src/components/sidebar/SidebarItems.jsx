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
            filter: {context: {source: {eq: "component"}}}
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
        <SidebarItems items={data.components.edges.map(comp => {
          return {
            href: comp.node.path,
            name: comp.node.context.name,
          };
        })}/>
      )}/>
  );

}

export default function SidebarItems({ items }) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="menu-list">
      {items.map(item => {
        if (item.items) {
          return (
            <li key={item.name}>
              <h4>{item.name}</h4>
              <SidebarItems items={item.items}/>
            </li>
          );
        }

        if (item.query === 'componentList') {
          return (
            <li key={item.name}>
              <h4>{item.name}</h4>
              <ComponentList/>
            </li>
          );
        }

        if (item.href) {
          return <li key={item.href}><Link to={item.href}>{item.name}</Link></li>;
        }

        return <li key={item.href}>{item.name} (not ready)</li>;
      })}
    </ul>
  );
}
