import React from 'react';

import SidebarLayout from '../layouts/SidebarLayout';

export default ({ location, pageContext }) => {
  const { html, sourceUrl } = pageContext;

  // eslint-disable-next-line react/no-danger
  const content = <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <SidebarLayout location={location} pageContext={pageContext}>
      {content}
    </SidebarLayout>
  );
};
