/* eslint-disable react/jsx-key */
import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import sidebarData from '../sidebar';
import MobileNav from './MobileNav';
import { Index } from 'elasticlunr';

const maxDisplayedSearchResults = 5;

function StringWithBoldQuery(props) {
  const { string, query } = props;

  if (!string.toLowerCase().includes(query.toLowerCase())) {
    return <>{string}</>;
  }

  const queryStartIndex = string.toLowerCase().indexOf(query.toLowerCase());

  return (
    <>
      {string.slice(0, queryStartIndex)}
      <strong>
        {string.slice(queryStartIndex, queryStartIndex + query.length)}
      </strong>
      {string.slice(queryStartIndex + query.length)}
    </>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };

    this.getOrCreateIndex = this.getOrCreateIndex.bind(this);
    this.search = this.search.bind(this);
  }

  getOrCreateIndex() {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);
  }

  search(evt) {
    const query = evt.target.value;
    if (query.length > 2) {
      this.index = this.getOrCreateIndex();
      this.setState({
        query,
        // Query the index with search string to get an [] of IDs
        results: this.index
          .search(query, { expand: true })
          // Map over each ID and return the full document
          .splice(0, maxDisplayedSearchResults)
          .map(({ ref }) => {
            const result = this.index.documentStore.getDoc(ref);

            return {
              ...result,
              filteredTags: result.tags
                .split(',')
                .filter(tag => tag.includes(query))
                .map(tag => tag.trim())
                .sort((tagA, tagB) => {
                  if (tagA.indexOf(query) < tagB.indexOf(query)) {
                    return -1;
                  }
                  if (tagA.indexOf(query) > tagB.indexOf(query)) {
                    return 1;
                  }
                  return 0;
                }),
              query,
            };
          }),
      });
    } else {
      this.setState({
        query,
        results: [],
      });
    }
  }

  render() {
    return (
      <div id="search-container" className="site-search-container">
        <i className="fas fa-search search-icon" />
        <input
          autoComplete="off"
          type="search"
          className="site-search-container__input"
          id="search-input"
          value={this.state.query}
          onChange={this.search}
          placeholder="Search..."
          aria-label="search"
        />
        <ul
          id="results-container"
          className="site-search-results"
          role="listbox"
        >
          {this.state.results.map(page => (
            <Link key={page.id} to={`${page.path}`}>
              <li>
                <div className="site-search-result-title">
                  <StringWithBoldQuery string={page.title} query={page.query} />
                </div>
                {page.filteredTags.length > 0 && (
                  <div className="site-search-result-tags">
                    <em>Tags: </em>
                    {page.filteredTags.map((tag, index) => (
                      <React.Fragment key={index}>
                        <StringWithBoldQuery string={tag} query={page.query} />
                        {index < page.filteredTags.length - 1 && `, `}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

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
                  render={data => (
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
