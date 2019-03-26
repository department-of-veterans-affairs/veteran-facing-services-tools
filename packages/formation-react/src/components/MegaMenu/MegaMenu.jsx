/* eslint-disable react/jsx-indent */
import PropTypes from 'prop-types';
import React from 'react';
import MenuSection from './MenuSection';
import SubMenu from './SubMenu';
import _ from 'lodash';
import classNames from 'classnames';

export default class MegaMenu extends React.Component {
  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)');
    this.smallDesktopMediaQuery = window.matchMedia(
      '(min-width: 768px and max-width: 1007px)',
    );

    if (this.mobileMediaQuery.matches) {
      this.props.toggleDisplayHidden(true);
    }

    this.mobileMediaQuery.addListener(this.resetDefaultState);
    document.body.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.resetDefaultState);
    document.body.removeEventListener('click', this.handleDocumentClick, false);
  }

  defaultSection(sections) {
    if (this.mobileMediaQuery.matches) {
      return '';
    }

    return sections[0].title;
  }

  handleDocumentClick = event => {
    if (this.props.currentDropdown && !this.menuRef.contains(event.target)) {
      this.props.toggleDropDown('');
    }
  };

  resetDefaultState = () => {
    if (this.mobileMediaQuery.matches) {
      this.props.toggleDisplayHidden(true);
    } else {
      this.props.toggleDisplayHidden(false);
    }
    this.props.updateCurrentSection('');
    this.props.toggleDropDown('');
  };

  toggleDropDown(title) {
    if (this.props.currentDropdown === title) {
      this.props.toggleDropDown('');
    } else {
      this.props.toggleDropDown(title);
    }
  }

  updateCurrentSection(title) {
    let sectionTitle = title;

    if (this.mobileMediaQuery.matches) {
      sectionTitle = this.props.currentSection === title ? '' : title;
    }

    this.props.updateCurrentSection(sectionTitle);
  }

  convertColumnsIntoArray(menu) {
    return [
      menu.menuSections.mainColumn,
      menu.menuSections.columnOne,
      menu.menuSections.columnTwo,
    ].reduce((acc, column) => {
      acc.push({
        title: column.title,
        links: {
          columnOne: {
            title: '',
            links: column.links,
          },
          columnTwo: {
            title: '',
            links: [],
          },
        },
      });

      return acc;
    }, []);
  }

  renderMenuSection(key, menu, section) {
    return (
      <MenuSection
        key={key}
        title={section.title}
        defaultSection={this.defaultSection(menu.menuSections)}
        currentSection={this.props.currentSection}
        updateCurrentSection={() => this.updateCurrentSection(section.title)}
        links={section.links}
        linkClicked={this.props.linkClicked}
        mobileMediaQuery={this.mobileMediaQuery}
        smallDesktopMediaQuery={this.smallDesktopMediaQuery}
        columnThreeLinkClicked={this.props.columnThreeLinkClicked}
      />
    );
  }

  renderPlainMenu(menu) {
    if (this.mobileMediaQuery.matches) {
      const menuSections = this.convertColumnsIntoArray(menu);

      return menuSections.map((section, index) => {
        const key = `${section.title}-${index}`;
        return this.renderMenuSection(key, menu, section)
      });
    }

    return (
      <SubMenu
        data={menu.menuSections}
        navTitle={menu.title}
        handleBackToMenu={() => this.toggleDropDown('')}
        show={this.props.currentDropdown !== ''}
        linkClicked={this.props.linkClicked}
        mobileMediaQuery={this.mobileMediaQuery}
        smallDesktopMediaQuery={this.smallDesktopMediaQuery}
        columnThreeLinkClicked={this.props.columnThreeLinkClicked}
      />
    );
  }

  renderMenuWithSideNav(menu) {
    return menu.menuSections.map((section, j) => {
      const isPlainLink = !!section.href;
      const key = `${_.kebabCase(menu.title)}-${j}`;

      if (isPlainLink) {
        return <a key={key} className="vetnav-level2" href={section.href}>{section.title}</a>;
      }

      return this.renderMenuSection(key, menu, section);
    });
  }

  renderOpenMenu(menu) {
    const isMenuWithSidebar = Array.isArray(menu.menuSections);
    const menuContents = isMenuWithSidebar ? this.renderMenuWithSideNav(menu) : this.renderPlainMenu(menu);

    return (
      <ul aria-label={menu.title}>{menuContents}</ul>
    );
  }

  renderNavbar() {
    const {
      currentDropdown,
      data: menus,
      linkClicked,
    } = this.props;

    return menus.map((menu, index) => {
      const kebabTitle = _.kebabCase(menu.title);
      const key = `${kebabTitle}-${index}`;
      const liClass = classNames(menu.className, { 'current-page': menu.currentPage });
      const isPlainLink = !!menu.href;

      let navbarLink = null;
      let menuContents = null;

      if (isPlainLink) {
        navbarLink = (
          <a href={menu.href} target={menu.target || null} onClick={linkClicked.bind(null, menu)} className="vetnav-level1">
            {menu.title}
          </a>
        );
      } else {
        const expanded = currentDropdown === menu.title;
        const menuId = `vetnav-${kebabTitle}`;
        const onClick = () => this.toggleDropDown(menu.title);

        navbarLink = (
          <button aria-expanded={expanded} aria-controls={menuId} className="vetnav-level1" onClick={onClick}>
            {menu.title}
          </button>
        );

        menuContents = (
          <div id={menuId} hidden={!expanded} className="vetnav-panel">
            {expanded && menu.menuSections && this.renderOpenMenu(menu)}
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
  }

  render() {
    return (
      <div className="login-container" {...this.props.display}>
        <div className="row va-flex" ref={el => { this.menuRef = el; }}>
          <div id="vetnav" role="navigation">
            <ul id="vetnav-menu">
              <li>
                <a href="/" className="vetnav-level1">Home</a>
              </li>
              {this.renderNavbar()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

MegaMenu.propTypes = {
  /**
   * This is the data that will generate the navigation
   * Data is made up an array of objects
   * Read Notes tab to see the structure of the data prop
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      menuSections: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    }),
  ).isRequired,
  /**
   * Function to update currentSection in state
   */
  updateCurrentSection: PropTypes.func.isRequired,
  /**
   * Function to update currentDropdown in state
   */
  toggleDropDown: PropTypes.func.isRequired,
  /**
   * Function to update if the MegaMenu is displayed or not
   */
  toggleDisplayHidden: PropTypes.func.isRequired,
  /**
   * String value of current dropdown
   */
  currentDropdown: PropTypes.string,
  /**
   * String value of current dropdown section
   */
  currentSection: PropTypes.string,

  /**
   * Optional function to intercept links clicked
   */
  linkClicked: PropTypes.func,

  /**
   * Optional function to intercept links clicked at column three
   */
  columnThreeLinkClicked: PropTypes.func,

  display: PropTypes.shape({
    hidden: PropTypes.bool,
  }),
};

MegaMenu.defaultProps = {
  currentDropdown: '',
  currentSection: '',
  display: {},
  linkClicked() {},
  columnThreeLinkClicked() {},
};
