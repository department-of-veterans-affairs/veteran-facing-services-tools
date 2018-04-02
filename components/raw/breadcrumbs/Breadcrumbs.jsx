import PropTypes from 'prop-types';
import React from 'react';

class Breadcrumbs extends React.Component {
  render() {
    const crumbs = this.props.crumbs;
    return (
      <nav className="va-nav-breadcrumbs">
        <ul className="row va-nav-breadcrumbs-list columns" role="menubar" aria-label="Primary">
          {crumbs.map((c) => {
            return <li key={c.key}><a href={c.link}>{c.label}</a></li>;
          })}
        </ul>
      </nav>
    );
  }
}

Breadcrumbs.propTypes = {

  // array should contain objects that contain each breadcrumb's
  // key, href, and plain-text label
  crumbs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Breadcrumbs;
