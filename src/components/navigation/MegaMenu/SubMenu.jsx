import React from 'react';
import PropTypes from 'prop-types';

class SubMenu extends React.Component {
  render() {
    const { mainColumn, columnOne, columnTwo, columnThree, seeAllLink } = this.props.data;

    if (this.props.show) {
      return (
        <div>
          {
            mainColumn && <ul
              className="vetnav-panel vetnav-panel--submenu panel-main"
              id="vetnav-disability"
              role="menu"
              aria-label="Disability">
              <li className="panel-title mm-link-container">{mainColumn.title}</li>
              { mainColumn.links.map((link, i) => (
                <li className="mm-link-container" key={`${link.href}-${i}`}><a className="mm-links" href={link.href}>{link.text}</a></li>
              ))}
            </ul>
          }
          <ul
            className={`vetnav-panel vetnav-panel--submenu panel-1 ${mainColumn && 'panel-white'}`}
            id="vetnav-disability"
            role="menu"
            aria-label="Disability">
            <li className="panel-title mm-link-container">{columnOne.title}</li>
            { columnOne.links.map((link, i) => (
              <li className="mm-link-container" key={`${link.href}-${i}`}><a className="mm-links" href={link.href}>{link.text}</a></li>
            ))}

            {
              !mainColumn && <div className="panel-bottom-link">
                {
                  seeAllLink && <a className="mm-links" href={seeAllLink.href}>View All in {seeAllLink.text}</a>
                }
              </div>
            }
          </ul>
          {
            columnTwo ? <ul
              className={`vetnav-panel vetnav-panel--submenu panel-2 ${mainColumn && 'panel-white'}`}
              id="vetnav-disability"
              role="menu"
              aria-label="Disability">
              <li className="panel-title mm-link-container">{columnTwo.title}</li>
              { columnTwo.links.map((link, i) => (
                <li className="mm-link-container" key={`${link.href}-${i}`}><a className="mm-links" href={link.href}>{link.text}</a></li>
              ))}
            </ul> : <ul
              className={`vetnav-panel vetnav-panel--submenu panel-2 ${mainColumn && 'panel-white'}`}
              id="vetnav-disability"
              role="menu"
              aria-label="Disability">
            </ul>
          }
          <div
            className="vetnav-panel vetnav-panel--submenu panel-3"
            id="vetnav-disability"
            role="menu"
            aria-label="Disability">
            <img src={columnThree.img.src} alt={columnThree.img.alt}></img>
            <a className="mm-links" href={columnThree.link.href}>{columnThree.link.text}</a>
            <p>{columnThree.description}</p>
          </div>
        </div>
      );
    }

    return (
      <div></div>
    );
  }
}

SubMenu.propTypes = {
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};

export default SubMenu;
