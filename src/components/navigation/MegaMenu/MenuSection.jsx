import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';

class MenuSection extends React.Component {
  getCurrentSection(props) {
    return props.currentSection ? props.currentSection : props.defaultSection;
  }

  render() {
    const show = this.getCurrentSection(this.props) === this.props.title;

    return (
      <li>
        <button
          className="vetnav-level2"
          aria-haspopup="true"
          aria-controls="vetnav-disability"
          aria-expanded={show}
          onClick={() => this.props.updateCurrentSection(this.props.title)}>{this.props.title}</button>
        <SubMenu data={this.props.links} show={show}></SubMenu>
      </li>
    );
  }
}

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  updateCurrentSection: PropTypes.func.isRequired,
  links: PropTypes.shape({
    mainColumn: {
      title: PropTypes.string,
      links: PropTypes.object,
    },
    columnOne: {
      title: PropTypes.string.isRequired,
      links: PropTypes.object.isRequired,
    },
    columnTwo: {
      title: PropTypes.string.isRequired,
      links: PropTypes.object.isRequired,
    },
    columnThree: {
      title: PropTypes.string.isRequired,
      links: PropTypes.object.isRequired,
    },
    seeAllLink: {
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }
  }).isRequired,
  defaultSection: PropTypes.string.isRequired,
};

export default MenuSection;
