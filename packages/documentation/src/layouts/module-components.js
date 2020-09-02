import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { LiveProvider, LiveEditor } from 'react-live';

import SidebarLayout from './SidebarLayout';
import PropsTable from '../components/propstable';
import './module-components.scss';

const MyCodeComponent = ({ children }) => (
  <LiveProvider code={children}>
    <LiveEditor />
  </LiveProvider>
);

export default function ModuleComponentsLayout({
  children,
  data,
  location,
  pageContext,
  tableOfContents,
}) {
  const {
    childrenComponentProp,
    displayName,
    docblock,
  } = data.componentMetadata;

  const sortedRequiredProps =
    childrenComponentProp.sort(a => a.required ? -1 : 1);

  const jsDocBlocks = docblock && docblock.split(/\r?\n/);
  const mdxCodeBlock = data.mdx.body;

  // Window is not available during build, so this was added deal with making
  // window available to some components.
  // Tried to add it to componentDidMount but it didn't work correctly.
  if (typeof window !== 'undefined') {
    window.dataLayer = [];
    window.VetsGov = {};
  }

  return (
    <MDXProvider components={{ code: MyCodeComponent }}>
      <SidebarLayout location={location} pageContext={pageContext}>
        <div className="content">
          {children}
          <h2>{displayName}</h2>
          {jsDocBlocks ? (
            <div>
              <h3>JsDocs:</h3>
              <div className="site-c-reactcomp__rendered">
                {jsDocBlocks.map((block, i) => (
                  <p key={`${block}-${i}`}>{block}</p>
                ))}
              </div>
            </div>
          ) : null}

          <MDXRenderer tableOfContents={tableOfContents}>
            {mdxCodeBlock}
          </MDXRenderer>
          <h2 style={{ marginTop: '2rem' }}>Props:</h2>
          <PropsTable propMetaData={sortedRequiredProps} />
        </div>
      </SidebarLayout>
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query($id: String!, $name: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents
    }
    componentMetadata(displayName: { eq: $name }) {
      id
      displayName
      docblock
      doclets
      childrenComponentProp {
        name
        docblock
        required
        parentType {
          name
        }
        type {
          value
        }
        defaultValue {
          value
          computed
        }
      }
      composes
    }
  }
`;
