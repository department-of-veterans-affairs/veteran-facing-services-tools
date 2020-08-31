import React from 'react';

export default function EditLink({ sourceUrl }) {
  return (
    <div>
      <i class="fa fa-edit" aria-hidden="true" />{' '}
      <a href={sourceUrl}>Edit this page on GitHub</a>
    </div>
  );
}
