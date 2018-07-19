import React from 'react';
import PropTypes from 'prop-types';

const toDash = (keyName) => {
  return keyName.replace(/([A-Z])/g, (str) => { return `-${str.toLowerCase()}`;});
};

const strToDash = (keyName) => {
  return keyName.toLowerCase().replace(/ /g, '-');
};

const Column = (props) => {
  const { data, keyName, navTitle, panelWhite } = props;

  if (keyName === 'columnThree') {
    return (
      <div
        className={`vetnav-panel vetnav-panel--submenu ${toDash(keyName)}`}
        aria-label={navTitle}>
        <img src={data.img.src} alt={data.img.alt}></img>
        <a className="mm-links" href={data.link.href}>{data.link.text}</a>
        <p>{data.description}</p>
      </div>
    );
  }

  return (
    <div className={`vetnav-panel vetnav-panel--submenu ${toDash(keyName)} ${panelWhite && 'panel-white'}`}>
      <h3 id={`vetnav-${strToDash(navTitle)}-header`}>{data.title}</h3>
      <ul id={`vetnav-${strToDash(navTitle)}`} aria-labelledby={`vetnav-${strToDash(navTitle)}-header`}>
        <li className="panel-top-link">{props.children}</li>

        { data.links.map((link, i) => (
          <li className="mm-link-container" key={`${link.href}-${i}`}><a className="mm-links" href={link.href}>{link.text}</a></li>
        ))}

        <div className="panel-bottom-link">{props.children}</div>
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
