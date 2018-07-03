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
      <li className="mm-link-container">
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
    columnOne: PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    }),
    columnTwo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    }),
    columnThree: PropTypes.shape({
      img: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      link: PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
      description: PropTypes.string.isRequired,
    }),
    seeAllLink: PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  }).isRequired,
  defaultSection: PropTypes.string.isRequired,
};

export default MenuSection;
