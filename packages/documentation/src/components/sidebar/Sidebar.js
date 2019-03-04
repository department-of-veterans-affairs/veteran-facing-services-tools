import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import sidebarData from '../../../information-architecture';

/**
 * Sidebar
 *
 * @param {props} props
 */

const SidebarItems = ({ items }) => {
  if (items === 'componentList') {
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

        if (item.href) {
          return <li key={item.href}><Link to={item.href}>{item.name}</Link></li>;
        }

        return <li key={item.href}>{item.name} (not ready)</li>;
      })}
    </ul>
  );
};

const Sidebar = ({ location }) => {
  const sidebarSection = sidebarData.sections.find(section => location.pathname.startsWith(`/${section.href}`));

  let linkContent;
  if (sidebarSection) {
    linkContent = (
      <>
        <h1>{ sidebarSection.name }</h1>
        <SidebarItems items={sidebarSection.items}/>
      </>
    );
  } else {
    linkContent = (
      <>
        <ul className="menu-list">
          {sidebarData.sections.map(section => <li key={section.id}><Link to={section.href}>{section.name}</Link></li>)}
        </ul>
      </>
    );
  }
  return (
    <aside className="sidebar">
      <div className="search">
        <div className="input-wrap">
          <input type="search" value="" onChange={() => {}} placeholder="Type to search"/>
        </div>
      </div>

      {linkContent}
    </aside>
  );
};

export default Sidebar;
