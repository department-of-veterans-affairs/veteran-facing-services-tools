import PropTypes from 'prop-types';
import React from 'react';
import MenuSection from './MenuSection';
import SubMenu from './SubMenu';

const defaultSection = (sections) => {
  return sections[0].title;
};

export default class MegaMenu extends React.Component {
  render() {
    const {
      handleOnClick,
      title,
      currentDropdown,
      currentSection,
      data,
      updateCurrentSection,
    } = this.props;

    return (
      <li>
        {
          data.menuSections ? <button
            aria-expanded={currentDropdown === title}
            aria-controls="vetnav-explore"
            aria-haspopup="true"
            className="vetnav-level1"
            onClick={() => handleOnClick(title)}>{title}</button>
            : <a href={data.href} className="vetnav-level1" id="pgdpevffu88i">{title}</a>
        }

        {
          title === currentDropdown && data.menuSections && <div id="vetnav-explore" className="vetnav-panel" role="none">
            <ul role="menu" aria-label="Explore benefits">
              {
                data.menuSections.constructor.name === 'Array' ? data.menuSections.map((section, j) => {
                  return (
                    <MenuSection
                      key={section + j}
                      title={section.title}
                      defaultSection={defaultSection(data.menuSections)}
                      currentSection={currentSection}
                      updateCurrentSection={updateCurrentSection}
                      links={section.links}></MenuSection>
                  );
                }) : <SubMenu data={data.menuSections} show></SubMenu>
              }
            </ul>
          </div>
        }
      </li>
    );
  }
}

MegaMenu.propTypes = {
  title: PropTypes.string.isRequired,
};

MegaMenu.defaultProps = {
};
