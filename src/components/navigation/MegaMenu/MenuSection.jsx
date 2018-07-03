import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';

const getCurrentSection = (props) => {
  return props.currentSection ? props.currentSection : props.defaultSection;
};

const getId = (title) => {
  return `vetnav-${title.toLowerCase().replace(/ /g, '-')}`;
};

const MenuSection = (props) => {
  const show = getCurrentSection(props) === props.title;

  return (
    <li className="mm-link-container" role="menuitem">
      <button
        id={getId(props.title)}
        className="vetnav-level2"
        aria-haspopup="true"
        aria-controls={show ? getId(props.title) : null}
        aria-expanded={show}
        onClick={() => props.updateCurrentSection(props.title)}>{props.title}</button>
      <SubMenu id="vetnav-explore" data={props.links} navTitle={props.title} show={show}></SubMenu>
    </li>
  );
};

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
