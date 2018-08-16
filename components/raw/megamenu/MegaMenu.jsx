import PropTypes from 'prop-types';
import React from 'react';
import MenuSection from './MenuSection';
import SubMenu from './SubMenu';
import _ from 'lodash';

const defaultSection = (sections) => {
  if (window.innerWidth < 768) {
    return '';
  }

  return sections[0].title;
};

export default class MegaMenu extends React.Component {
  componentDidMount() {
    if (window.innerWidth < 768) {
      this.props.toggleDisplayHidden(true);
    }

    window.addEventListener('resize', this.resetDefaultState.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.resetDefaultState.bind(this));
  }

  getSubmenu(item, currentSection) {
    if (window.innerWidth < 768) {
      const menuSections = [
        item.menuSections.mainColumn,
        item.menuSections.columnOne,
        item.menuSections.columnTwo,
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
            }
          }
        });

        return acc;
      }, []);

      return menuSections.map((section, i) => {
        return (
          <MenuSection
            key={`${section}-${i}`}
            title={section.title}
            defaultSection={defaultSection(item.menuSections)}
            currentSection={currentSection}
            updateCurrentSection={() => this.updateCurrentSection(section.title)}
            links={section.links}></MenuSection>
        );
      });
    }

    return (
      <SubMenu
        data={item.menuSections}
        navTitle={item.title}
        handleBackToMenu={() => this.toggleDropDown('')}
        show={this.props.currentDropdown !== ''}></SubMenu>
    );
  }

  resetDefaultState() {
    if (window.innerWidth > 768) {
      this.props.toggleDisplayHidden(false);
    } else {
      this.props.toggleDisplayHidden(true);
    }

    this.props.updateCurrentSection('');
    this.props.toggleDropDown('');
  }

  toggleDropDown(title) {
    if (this.props.currentDropdown === title) {
      this.props.toggleDropDown('');
    } else {
      this.props.toggleDropDown(title);
    }
  }

  updateCurrentSection(title) {
    let sectionTitle = title;

    if (window.innerWidth < 768) {
      sectionTitle = this.props.currentSection === title ? '' : title;
    }

    this.props.updateCurrentSection(sectionTitle);
  }

  render() {
    const {
      currentDropdown,
      currentSection,
      data,
      display,
    } = this.props;

    return (
      <div
        className="login-container"
        {...display}>
        <div className="row va-flex">
          <div id="vetnav" role="navigation">
            <ul id="vetnav-menu" role="menubar">
              <li><a href="/" className="vetnav-level1" role="menuitem">Home</a></li>
              {
                data.map((item, i) => {
                  return (
                    <li key={`${_.kebabCase(item.title)}-${i}`}>
                      {
                        item.menuSections ? <button
                          aria-expanded={currentDropdown === item.title}
                          aria-controls={`vetnav-${_.kebabCase(item.title)}`}
                          aria-haspopup="true"
                          className="vetnav-level1"
                          onClick={() => this.toggleDropDown(item.title)}>{item.title}</button>
                          : <a href={item.href} className="vetnav-level1" >{item.title}</a>
                      }
                      <div id={`vetnav-${_.kebabCase(item.title)}`} className="vetnav-panel" role="none" hidden={currentDropdown !== item.title}>
                        {
                          item.title === currentDropdown && item.menuSections && <ul aria-label={item.title}>
                            {
                              item.menuSections.constructor.name === 'Array' ? item.menuSections.map((section, j) => {
                                return (
                                  <MenuSection
                                    key={`${section}-${j}`}
                                    title={section.title}
                                    defaultSection={defaultSection(item.menuSections)}
                                    currentSection={currentSection}
                                    updateCurrentSection={() => this.updateCurrentSection(section.title)}
                                    links={section.links}></MenuSection>
                                );
                              }) : this.getSubmenu(item,  currentSection)
                            }
                          </ul>
                        }
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

MegaMenu.propTypes = {
  /**
   * This is the data that will generate the navigation<br/>
   * Data is made up an array of objects </br>
   * Read Notes tab to see the structure of the data prop
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      menuSections: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
      ]),
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
  display: PropTypes.shape({
    hidden: PropTypes.boolean
  }),
};

MegaMenu.defaultProps = {
  currentDropdown: '',
  currentSection: '',
  display: {},
};
