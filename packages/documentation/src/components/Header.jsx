/* eslint-disable react/jsx-key */
import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import sidebarData from '../sidebar';
import Search from './Search';
import MobileNav from './MobileNav';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
    };
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <a className="usa-skipnav" href="#main-content">
          Skip to main content
        </a>
        <header className="site-c-header" role="banner">
          <div className="site-l-wrapper">
            <div className="site-c-header__masthead">
              <div className="site-c-header__logo" id="extended-logo">
                <em className="site-c-header__logo-text">
                  <Link
                    className="site-c-header__logo-link"
                    title="VA.gov client application documentation homepage"
                    to="/"
                  >
                    <strong className="vads-u-display--block small-screen:vads-u-display--inline">
                      VA.gov
                    </strong>{' '}
                    <span className="vads-u-display--none small-screen:vads-u-display--inline">
                      |
                    </span>{' '}
                    Client application documentation
                  </Link>
                </em>
              </div>
              <div className="site-c-header__utility-links">
                <StaticQuery
                  query={graphql`
                    query SearchIndexQuery {
                      siteSearchIndex {
                        index
                      }
                    }
                  `}
                  render={(data) => (
                    <Search searchIndex={data.siteSearchIndex.index} />
                  )}
                />
              </div>
              <button
                type="button"
                id="toggle-mobile-search"
                aria-label="Show search"
                className="site-toggle-search"
                aria-controls="mobile-search-container"
              >
                <i className="fas fa-search" />
              </button>
              <button
                className="site-c-header__open-mobile-nav-button"
                id="open-mobile-nav-button"
                aria-label="Open navigation menu"
                type="button"
                onClick={() => this.setState({ navOpen: true })}
              >
                Menu
              </button>
            </div>
            <nav className="site-c-header__nav">
              <ul className="site-c-header__nav-list">
                {sidebarData.sections.map(section => (
                  <li key={section.id} className="site-c-header__nav-item">
                    <Link
                      className={`site-c-header__nav-item__link ${
                        location.pathname.includes(section.href)
                          ? 'current'
                          : ''
                      }`}
                      to={section.href}
                    >
                      {section.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <div
          id="mobile-search-container"
          className="site-search-container site-seach-container--mobile"
        >
          <i className="fas fa-search search-icon search-icon--mobile" />
          <input
            type="search"
            className="site-search-container__input vads-u-max-width--none"
            id="mobile-search-input"
            placeholder="Search..."
            aria-label="Search"
          />
          <ul
            id="mobile-results-container"
            className="site-search-results site-search-results--mobile"
            role="listbox"
          />
        </div>
        {this.state.navOpen && <div className="site-c-overlay is-visible" />}
        <MobileNav
          location={location}
          open={this.state.navOpen}
          onClose={() => this.setState({ navOpen: false })}
        />
      </div>
    );
  }
}
