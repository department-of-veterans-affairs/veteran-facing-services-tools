/* eslint-disable  react/no-danger */
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import SidebarLayout from './SidebarLayout';

export default class ExternalLayout extends Component {
  render() {
    const { data, location } = this.props;

    return (
      <SidebarLayout location={location}>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </SidebarLayout>
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
