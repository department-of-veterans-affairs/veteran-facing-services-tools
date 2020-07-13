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
  const pathName = getPathName(location);

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

const getPathName = (location) => {
  // Remove extra path in production environment
  let pathName = location.pathname.replace(
    '/veteran-facing-services-tools',
    '',
  );

  // Check for additional '/' at the end when refreshing the browser
  if (pathName.length > 0 && pathName.charAt(pathName.length - 1) === '/') {
    pathName = pathName.substring(0, pathName.length - 1);
  }

  return pathName;
};

export default function Documentation({ location }) {
  const base = `https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages`;
  const documentation = '/documentation/src/pages';
  const link =
    base +
    documentation +
    getPathName(location) +
    getIndexMdx(location) +
    '.mdx';

  return <Link to={link}>Edit this page on GitHub</Link>;
}
