import React from 'react';

import SidebarLayout from '../layouts/SidebarLayout';

export default ({ location, pageContext }) => {
  const { html, sourceUrl } = pageContext;

  // eslint-disable-next-line react/no-danger
  const content = <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <SidebarLayout location={location}>
      <div>{content}</div>
      <div>
        <h5>Source:</h5>
        <a href={sourceUrl}>{sourceUrl}</a>
      </div>
    </SidebarLayout>
  );
};
