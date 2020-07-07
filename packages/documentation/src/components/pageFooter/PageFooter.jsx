import React from 'react';
import Components from './Components';
import Documentation from './Documentation';

const getGithubHref = (location) => {
  if (location.pathname.includes('components')) {
    return <Components pathname={location.pathname} />;
  } else {
    return <Documentation location={location} />;
  }
};

export default function PageFooter({ location }) {
  return (
    <div>
      <p>
        <br />
        <i class="fa fa-edit" aria-hidden="true"></i> {getGithubHref(location)}
      </p>
    </div>
  );
}
