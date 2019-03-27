/* eslint-disable react/jsx-indent */
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from './Navbar';
import MenuSection from './MenuSection';
import SubMenu from './SubMenu';
import _ from 'lodash';

export default class MegaMenu extends React.Component {
  constructor(props) {
    super(props);

    // Necessary for Gatsby, https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-223360361
    if (typeof window !== 'undefined') {
      this.mobileMediaQuery = window.matchMedia('(max-width: 767px)');
      this.smallDesktopMediaQuery = window.matchMedia(
        '(min-width: 768px and max-width: 1007px)',
      );
    }
  }

  componentDidMount() {
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

  storeMenuRef = el => {
    this.menuRef = el;
  };

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

  toggleDropDown = title => {
    if (this.props.currentDropdown === title) {
      this.props.toggleDropDown('');
    } else {
      this.props.toggleDropDown(title);
    }
  };

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
        return this.renderMenuSection(key, menu, section);
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

  renderMenuWithSideNav = menu =>
    menu.menuSections.map((section, j) => {
      const isPlainLink = !!section.href;
      const key = `${_.kebabCase(menu.title)}-${j}`;

      if (isPlainLink) {
        return (
          <a key={key} className="vetnav-level2" href={section.href}>
            {section.title}
          </a>
        );
      }

      return this.renderMenuSection(key, menu, section);
    });

  renderDropdown = menu => {
    const isMenuWithSidebar = Array.isArray(menu.menuSections);
    const menuContents = isMenuWithSidebar
      ? this.renderMenuWithSideNav(menu)
      : this.renderPlainMenu(menu);

    return <ul aria-label={menu.title}>{menuContents}</ul>;
  };

  render() {
    return (
      <div className="login-container" {...this.props.display}>
        <div className="row va-flex" ref={this.storeMenuRef}>
          <Navbar
            menus={this.props.data}
            currentDropdown={this.props.currentDropdown}
            linkClicked={this.props.linkClicked}
            toggleDropDown={this.toggleDropDown}
            renderDropdown={this.renderDropdown}
          />
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
