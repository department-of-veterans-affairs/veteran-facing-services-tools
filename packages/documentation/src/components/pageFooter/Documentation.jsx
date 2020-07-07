import React from 'react';
import { Link } from 'gatsby';

import sidebarData from '../../sidebar';

const getIndexMdx = (location) => {
  const sidebarSection = sidebarData.sections.find((section) =>
    location.pathname.includes(section.href),
  );

  // Test first Level of the sidebar object
  const level1 = sidebarData.sections.find(
    (section) => section.href === location.pathname,
  );

  if (level1 && level1.indexmdx) {
    return '/index';
  }

  // Test second Level of the sidebar object
  const level2Sections = sidebarSection.items.map((item) => {
    const level2Item = item.items.find(
      (lvl2Item) => lvl2Item.href === location.pathname,
    );
    return level2Item ? level2Item : null;
  });

  const level2 = level2Sections.map((section) => {
    if (section && section.href && section.href === location.pathname) {
      return section && section.indexmdx ? true : false;
    }
  });

  if (level2.find((indexmdx) => indexmdx)) {
    return '/index';
  }

  return '';
};

export default function Documentation({ location }) {
  const base = `https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/master/packages`;
  const documentation = '/documentation/src/pages';
  const link =
    base + documentation + location.pathname + getIndexMdx(location) + '.mdx';

  return <Link to={link}>Edit this page on GitHub</Link>;
}
