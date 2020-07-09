import React from 'react';
import { Link } from 'gatsby';

import sidebarData from '../../sidebar';

/**
 * This function will return if the name of the file is index.mdx
 * instead of the default value
 * @param {object} location - Used to obtain the page location
 * @returns {string} - Return either index or empty if not needed
 */

const getIndexMdx = (location) => {
  const pathName = location.pathname.replace(
    '/veteran-facing-services-tools',
    '',
  );

  const sidebarSection = sidebarData.sections.find((section) =>
    pathName.includes(section.href),
  );

  // Test first Level of the sidebar object
  const level1 = sidebarData.sections.find(
    (section) => section.href === pathName,
  );

  if (level1?.indexmdx) {
    return '/index';
  }

  // Test second Level of the sidebar object
  if (sidebarSection?.items) {
    const level2Sections = sidebarSection.items.map((item) => {
      return Array.isArray(item.items)
        ? item.items.find((lvl2Item) => lvl2Item.href === pathName)
        : null;
    });

    const level2 = level2Sections.map((section) => {
      if (section?.href && section.href === pathName) {
        return section?.indexmdx ? true : false;
      }
    });

    if (level2.find((indexmdx) => indexmdx)) {
      return '/index';
    }
  }

  return '';
};

export default function Documentation({ location }) {
  const base = `https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages`;
  const documentation = '/documentation/src/pages';
  const pathName = location.pathname.replace(
    '/veteran-facing-services-tools',
    '',
  );
  const link = base + documentation + pathName + getIndexMdx(location) + '.mdx';

  return <Link to={link}>Edit this page on GitHub</Link>;
}
