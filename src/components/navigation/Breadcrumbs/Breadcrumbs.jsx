import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { debounce, uniqueId } from 'lodash';

/**
 * React component to dynamically build breadcrumb links.
 * The Breadcrumbs component accepts an array of HTML A tags,
 * React Router LINK components, or a combination of the two.
 * The component also accepts hard-coded A or LINK elements
 * as props.children.
 */
class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);

    this.breadcrumbId = this.props.id || uniqueId('va-breadcrumbs-');
    this.breadcrumbListId = this.props.listId || uniqueId('va-breadcrumbs-list-');

    this.state = {
      mobileShow: false,
    };
  }

  componentDidMount() {
    const mobileWidth = this.props.mobileWidth;

    this.toggleDisplay(mobileWidth);
    window.addEventListener('resize', this.debouncedToggleDisplay);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedToggleDisplay);
  }

  debouncedToggleDisplay = debounce(() => {
    const mobileWidth = this.props.mobileWidth;

    this.toggleDisplay(mobileWidth);
  }, 500);

  /**
   * Provide a means to add overriding classes
   */
  classNames() {
    const customClass = this.props.customClasses;

    return classNames(
      'va-nav-breadcrumbs',
      customClass
    );
  }

  /**
   * Manage state to show all breadcrumb links or
   * just the mobile "Back by one" link
   */
  toggleDisplay = breakpoint => {
    this.setState({ mobileShow: window.innerWidth <= breakpoint });
  }

  /**
   * Build the breadcrumb links. Check the array length
   * and add an `aria-current` attribute to the last link.
   */
  renderBreadcrumbLinks = () => {
    return React.Children.map(this.props.children, (child, i) => {
      if (i === this.props.children.length - 1) {
        return (
          <li>{React.cloneElement(child, {
            'aria-current': 'page',
          })}</li>
        );
      }

      return <li>{child}</li>;
    });
  }

  /**
   * The second to last link being sliced from the crumbs array
   * prop to create the "Back by one" mobile breadcrumb link
   */
  renderMobileLink = () => {
    return React.Children.map(this.props.children, (child, i) => {
      if (i === this.props.children.length - 2) {
        return (
          <li>{React.cloneElement(child, {
            'aria-label': `Previous page: ${child.props.children}`,
            className: 'va-nav-breadcrumbs-list__mobile-link',
          })}</li>
        );
      }

      return null;
    });
  }

  render() {
    const mobileShow = this.props.mobileFirstProp || this.state.mobileShow;
    const shownList = mobileShow
      ? (
        <ul
          className="row va-nav-breadcrumbs-list columns"
          id={`${this.breadcrumbListId}-clone`}>
          {this.renderMobileLink()}
        </ul>
      ) : (
        <ul
          className="row va-nav-breadcrumbs-list columns"
          id={this.breadcrumbListId}>
          {this.renderBreadcrumbLinks()}
        </ul>
      );

    return (
      <nav
        aria-label={this.props.ariaLabel}
        aria-live="polite"
        className={this.classNames()}
        data-mobile-first={this.props.mobileFirstProp}
        data-mobile-width={this.props.mobileWidth}
        id={this.breadcrumbId}>
        { shownList }
      </nav>
    );
  }
}

Breadcrumbs.defaultProps = {
  ariaLabel: 'Breadcrumb',
  mobileWidth: 481,
};

Breadcrumbs.propTypes = {
  /**
   * Adds an aria-label attribute to the <nav> element.
   * The aria-label will be read out when users navigate the
   * <Breadcrumbs/> component using a screen reader.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Optionally adds one or more CSS classes to the NAV element
   */
  customClasses: PropTypes.string,
  /**
   * Adds a custom id attribute to the NAV element
   */
  id: PropTypes.string,
  /**
   * Adds a custom id attribute to the UL element
   */
  listId: PropTypes.string,
  /**
   * Overrides the state object Boolean state.mobileShow.
   * The mobile breadcrumb will always be rendered while
   * mobileFirstProp is True.
   */
  mobileFirstProp: PropTypes.bool,
  /**
   * Changes viewport width to update state.mobileShow
   * and toggle breadcrumb UI change
   */
  mobileWidth: PropTypes.number.isRequired,
};

export default Breadcrumbs;
