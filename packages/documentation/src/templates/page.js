import React from 'react';

export default ({ pageContext }) => {
  const { html, sourceUrl } = pageContext;

  // eslint-disable-next-line react/no-danger
  const content = <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <div>
      <div>
        {content}
        <a href={sourceUrl}>Source</a>
      </div>
    </div>
  );
};
