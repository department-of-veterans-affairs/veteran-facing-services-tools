import React from 'react';

import Telephone, { CONTACTS, PATTERNS } from '../Telephone/Telephone';
import MediaLink, { MEDIA_SITES } from '../MediaLink/MediaLink';
import DownloadLink, { FILE_TYPES } from '../DownloadLink/DownloadLink';
import { createIcon } from '../../helpers/link-utils';

const AccessibleLink = props => {
  const { children, icon, ...linkProps } = props;
  return (
    <a {...linkProps}>
      {icon && typeof icon === 'string' ? createIcon(icon) : icon}
      {children}
    </a>
  );
};

AccessibleLink.Telephone = Telephone;
AccessibleLink.Download = DownloadLink;
AccessibleLink.Media = MediaLink;

export { CONTACTS, PATTERNS, MEDIA_SITES, FILE_TYPES, createIcon };
export default AccessibleLink;
