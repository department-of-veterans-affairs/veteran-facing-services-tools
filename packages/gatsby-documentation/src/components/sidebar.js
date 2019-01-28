import React from 'react'
import { Link } from 'gatsby'

/**
 * Sidebar
 *
 * @param {props} props
 */

const Sidebar = ({ pages, siteTitle }) => {
  return (
    <aside className="sidebar">
      <div className="search">
        <div className="input-wrap">
          <input type="search" value="" placeholder="Type to search"/>
        </div>
      </div>

      <h1>{ siteTitle }</h1>
      <ul className="menu-list">
        {pages.map((page) => {
          return (
            <li key={page.node.id}>
              <Link to={`/${page.node.fields.slug.toLowerCase()}/`}>{page.node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
