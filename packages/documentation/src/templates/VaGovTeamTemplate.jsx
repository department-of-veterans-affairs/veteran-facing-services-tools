import React from 'react';

import SidebarLayout from '../layouts/SidebarLayout';

export default function VaGovTeamTemplate({ location, pageContext }) {
  const { html } = pageContext;

  // eslint-disable-next-line react/no-danger
  const content = <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <SidebarLayout location={location} pageContext={pageContext}>
      {content}
    </SidebarLayout>
  );
};
