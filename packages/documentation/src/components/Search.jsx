import React from 'react';
import { Link } from 'gatsby';
import { Index } from 'elasticlunr';

const maxDisplayedSearchResults = 5;

function StringWithBoldQuery(props) {
  const { string, queries } = props;
  const lowerCasedQueries = queries.map(query => query.toLowerCase());
  const lowerCasedString = string.toLowerCase();

  const matchedQuery = lowerCasedQueries.find(query =>
    lowerCasedString.includes(query),
  );
  if (!matchedQuery) {
    return <>{string}</>;
  }

  const queryStartIndex = lowerCasedString.indexOf(matchedQuery);

  return (
    <>
      {string.slice(0, queryStartIndex)}
      <strong>
        {string.slice(queryStartIndex, queryStartIndex + matchedQuery.length)}
      </strong>
      {string.slice(queryStartIndex + matchedQuery.length)}
    </>
  );
}

export default class Search extends React.Component {
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
                .filter(tag =>
                  query
                    .split(' ')
                    .find(queryPart =>
                      tag.toLowerCase().includes(queryPart.toLowerCase()),
                    ),
                )
                .map(tag => tag.trim()),
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
                  <StringWithBoldQuery
                    string={page.title}
                    queries={page.query.split(' ')}
                  />
                </div>
                {page.filteredTags.length > 0 && (
                  <div className="site-search-result-tags">
                    <em>Matching Tags: </em>
                    {page.filteredTags.map((tag, index) => (
                      <React.Fragment key={index}>
                        <StringWithBoldQuery
                          string={tag}
                          queries={page.query.split(' ')}
                        />
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
