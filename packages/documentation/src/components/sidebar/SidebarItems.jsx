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
      {items.map(item => (
        <li key={item.name}>
          {!!item.items && (
            <li key={item.name}>
              <h4>{item.name}</h4>
              <SidebarItems items={item.items}/>
            </li>
          )}
          {item.query === 'componentList' && (
            <li key={item.name}>
              <h4>{item.name}</h4>
              <ComponentList/>
            </li>
          )}
          {!!item.href && (
            <li key={item.name}><Link to={item.href}>{item.name}</Link></li>
          )}
          {!item.href && !item.items && !item.query && (
            <li key={item.href}>{item.name} (future)</li>
          )}
        </li>
      ))}
    </ul>
  );
}
