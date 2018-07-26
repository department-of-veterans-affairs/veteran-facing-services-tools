import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const isPanelWhite = (panelWhite) => {
  if (window.innerWidth < 768) {
    return '';
  }

  return panelWhite ? ' panel-white' : '';
};

const Column = (props) => {
  const { data, keyName, panelWhite } = props;

  if (keyName === 'columnThree') {
    return (
      <div
        className={`vetnav-panel vetnav-panel--submenu ${_.kebabCase(keyName)}${isPanelWhite(panelWhite)}`}
        aria-label={keyName}>
        <div className="mm-marketing-container">
          <img src={data.img.src} alt={data.img.alt}></img>
          <a className="mm-links" href={data.link.href}>{data.link.text}</a>
          <p>{data.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`vetnav-panel vetnav-panel--submenu ${_.kebabCase(keyName)}${isPanelWhite(panelWhite)}`}>
      <h3 id={`vetnav-${_.kebabCase(keyName)}-header`}>{data.title}</h3>
      <ul id={`vetnav-${_.kebabCase(keyName)}`} aria-labelledby={`vetnav-${_.kebabCase(keyName)}-header`}>
        <li className="panel-top-link">{props.children}</li>

        { data.links.map((link, i) => (
          <li className="mm-link-container" key={`${link.href}-${i}`}><a className="mm-links" href={link.href}>{link.text}</a></li>
        ))}

        <li className="panel-bottom-link">{props.children}</li>
      </ul>
    </div>
  );
};

Column.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ),
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    link: PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
    description: PropTypes.string,
  }),
  keyName: PropTypes.string.isRequired,
  navTitle: PropTypes.string.isRequired,
  panelWhite: PropTypes.bool.isRequired,
};

export default Column;
