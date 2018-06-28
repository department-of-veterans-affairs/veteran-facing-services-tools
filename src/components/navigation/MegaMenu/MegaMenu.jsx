import PropTypes from 'prop-types';
import React from 'react';
import MenuSection from './MenuSection';
import SubMenu from './SubMenu';

const defaultSection = (sections) => {
  return sections[0].title;
};

export default class MegaMenu extends React.Component {
  handleOnClick(title) {
    if (this.props.currentDropdown === title) {
      this.props.handleOnClick('');
    } else {
      this.props.handleOnClick(title);
    }
  }

  updateCurrentSection(title) {
    this.props.updateCurrentSection(title);
  }

  render() {
    const {
      currentDropdown,
      currentSection,
      data,
    } = this.props;

    return (
      <div className="login-container">
        <div className="row va-flex">
          <div id="vetnav" role="navigation">
            <ul id="vetnav-menu" role="menubar">
              <li><a href="/" className="vetnav-level1" role="menuitem">Home</a></li>
              {
                data.map((item, i) => {
                  return (
                    <li key={`${item.title.toLowerCase().replace(/ /g, '-')}-${i}`}>
                      {
                        item.menuSections ? <button
                          aria-expanded={currentDropdown === item.title}
                          aria-controls="vetnav-explore"
                          aria-haspopup="true"
                          className="vetnav-level1"
                          onClick={() => this.handleOnClick(item.title)}>{item.title}</button>
                          : <a href={item.href} className="vetnav-level1" id="pgdpevffu88i">{item.title}</a>
                      }

                      {
                        item.title === currentDropdown && item.menuSections && <div id="vetnav-explore" className="vetnav-panel" role="none">
                          <ul role="menu" aria-label="Explore benefits">
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
                              }) : <SubMenu data={item.menuSections} show></SubMenu>
                            }
                          </ul>
                        </div>
                      }
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
  data: PropTypes.array.isRequired,
  updateCurrentSection: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  currentDropdown: PropTypes.string,
  currentSection: PropTypes.string,
};

MegaMenu.defaultProps = {
  currentDropdown: '',
  currentSection: '',
};
