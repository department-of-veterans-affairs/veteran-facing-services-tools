import React from 'react';
import Components from './Components';
import Documentation from './Documentation';

const getGithubHref = (location) => {
  if (location.pathname.includes('components')) {
    const pathName = location.pathname.replace(
      '/veteran-facing-services-tools',
      '',
    );
    return <Components pathname={pathName} />;
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
