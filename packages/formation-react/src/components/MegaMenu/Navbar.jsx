import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

export default function Navbar({
  menus,
  currentDropdown,
  toggleDropDown,
  renderDropdown,
  linkClicked,
}) {
  const navbarItems = menus.map((menu, index) => {
    const kebabTitle = _.kebabCase(menu.title);
    const key = `${kebabTitle}-${index}`;
    const liClass = classNames(menu.className, {
      'current-page': menu.currentPage,
    });
    const isPlainLink = !!menu.href;

    let navbarLink = null;
    let menuContents = null;

    if (isPlainLink) {
      const target = menu.target || null;
      const onClick = linkClicked.bind(null, menu);

      navbarLink = (
        <a
          href={menu.href}
          target={target}
          onClick={onClick}
          className="vetnav-level1"
        >
          {menu.title}
        </a>
      );
    } else {
      const expanded = currentDropdown === menu.title;
      const menuId = `vetnav-${kebabTitle}`;
      const toggleMenu = () => toggleDropDown(menu.title);

      navbarLink = (
        <button
          onClick={toggleMenu}
          aria-expanded={expanded}
          aria-controls={menuId}
          className="vetnav-level1"
        >
          {menu.title}
        </button>
      );

      menuContents = (
        <div
          id={menuId}
          hidden={!expanded}
          aria-hidden={!expanded}
          className="vetnav-panel"
        >
          {menu.menuSections && renderDropdown(menu)}
        </div>
      );
    }

    return (
      <li key={key} className={liClass}>
        {navbarLink}
        {menuContents}
      </li>
    );
  });

  return (
    <div id="vetnav" role="navigation">
      <ul id="vetnav-menu">
        <li>
          <a href="/" className="vetnav-level1">
            Home
          </a>
        </li>
        {navbarItems}
      </ul>
    </div>
  );
}
