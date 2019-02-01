import React, { Component } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';
import { LiveProvider, LiveEditor } from 'react-live';

import Layout from './layout';
import PropsTable from '../components/propstable';
import './module-components.scss';

const MyCodeComponent = ({ children }) => (
  <LiveProvider code={children}>
    <LiveEditor/>
  </LiveProvider>
);

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, data, tableOfContents } = this.props;
    // Window is not available during build, so this was added deal with making
    // window available to some components.
    // Tried to add it to componentDidMount but it didn't work correctly.
    if (typeof window !== 'undefined') {
      window.dataLayer = [];
    }

    return (
      <MDXProvider components={{ code: MyCodeComponent }}>
        <Layout>
          <div className="content">
            {children}
            <h2>{data.componentMetadata.displayName}</h2>
            <p>{data.componentMetadata.docblock}</p>
            <MDXRenderer tableOfContents={tableOfContents}>
              {data.mdx.code.body}
            </MDXRenderer>
            <h2 style={{ marginTop: '2rem' }}>Props:</h2>
            <PropsTable
              propMetaData={data.componentMetadata.childrenComponentProp}/>
          </div>
        </Layout>
      </MDXProvider>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!, $name: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
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
