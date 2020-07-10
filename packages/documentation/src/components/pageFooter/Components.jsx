import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

/**
 * Finds a specific component inside a list
 *
 * @param {string} componentToMatch
 */

function ComponentList({ componentToMatch }) {
  return (
    <StaticQuery
      query={graphql`
        query ComponentsQuery {
          components: allSitePage(
            filter: { context: { source: { eq: "component" } } }
            sort: { fields: [context___name], order: ASC }
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
      render={(data) =>
        data.components.edges.map((comp) => {
          return componentToMatch === comp.node.context.name.toLowerCase() ? (
            <ComponentItem
              item={{
                name: comp.node.context.name,
              }}
            />
          ) : (
            ''
          );
        })
      }
    />
  );
}

function ComponentItem({ item }) {
  const base = `https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages`;
  const formationReact = '/formation-react/src/components/';
  const link = base + formationReact + item.name + '/' + item.name + '.mdx';
  return <Link to={link}>Edit this page on GitHub</Link>;
}

export default function Components({ pathname }) {
  const splits = pathname.split('/');
  return <ComponentList componentToMatch={splits[3]} />;
}
