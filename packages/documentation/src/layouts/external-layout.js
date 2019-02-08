/* eslint-disable  react/no-danger */
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from './layout';

export default class ExternalLayout extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <h2>{data.markdownRemark.fields.slug}</h2>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
    }
  }
`;
