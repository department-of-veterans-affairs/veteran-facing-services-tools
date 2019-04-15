import React from 'react';
import { Link } from 'gatsby';
import sidebarData from '../sidebar';
import classNames from 'classnames';

export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = sidebarData.sections.reduce(
      (acc, next) => ({
        [next.id]: false,
        ...acc,
      }),
      {},
    );
  }
  render() {
    const { open, onClose, location } = this.props;

    return (
      <div
        className={classNames('site-c-mobile-nav', {
          'is-visible': open,
        })}
        id="mobile-nav"
      >
        <button
          id="close_mobile_nav_button"
          className="site-c-mobile-nav__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close this menu"
        >
          <i className="fas fa-times" />
        </button>
        <div className="usa-accordion ">
          {sidebarData.sections.map(section => (
            <div key={section.id}>
              <p className="usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0">
                <button
                  className="usa-accordion-button site-c-mobile-nav__accordion-button"
                  onClick={() =>
                    this.setState({ [section.id]: !this.state[section.id] })
                  }
                  aria-expanded={this.state[section.id] ? 'true' : 'false'}
                  aria-controls={`nav-${section.id}`}
                >
                  {section.name}
                </button>
              </p>
              <div
                id={`nav-${section.id}`}
                aria-hidden={this.state[section.id] ? 'false' : 'true'}
                className="usa-accordion-content site-c-mobile-nav__accordion-content"
              >
                <ul className="site-c-mobile-nav-list">
                  <li className="site-c-mobile-nav-list__item">
                    <Link
                      className={classNames('site-c-mobile-nav-list__link', {
                        current: location.pathname === section.href,
                      })}
                      to={section.href}
                    >
                      Overview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
