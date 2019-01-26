import React from 'react'
import { Link } from 'gatsby'

/**
 * Sidebar
 *
 * @param {props} props
 */

const Sidebar = ({pages}) => {
  return (
    <nav>
      <ul>
        {pages.map((page) => {
          return (
            <li key={page.node.id}>
              <Link to={`/${page.node.fields.slug.toLowerCase()}/`}>{page.node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
