import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

class SortableTable extends Component {
  static propTypes = {
    className: PropTypes.string,

    /**
     * Field value to sort by in either ascending or descending order.
     * The `value` must be one of the values in the `fields` prop.
     */
    currentSort: PropTypes.shape({
      value: PropTypes.string.isRequired,
      order: PropTypes.oneOf(['ASC', 'DESC']),
    }).isRequired,

    /**
     * Mappings of header labels to properties on the objects in `data`.
     */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
    /**
     * Each object represents data for a row.
     * An optional class may be provided to style specific rows.
     */
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        values: PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        ),
        rowClass: PropTypes.string,
      }),
    ).isRequired,

    // DEPRECATING: A callback for when a header is clicked.
    onSort: PropTypes.func,
    // A callback for when a header is clicked.
    onHeaderClick: PropTypes.func,

    /**
     * Each object represents data for a row.
     * An optional class may be provided to style specific rows.
     */
    renderCell: PropTypes.func,
  };

  onHeaderClick = (value, order) => () => {
    const { onSort } = this.props;

    // This is a legacy prop that is being renamed to `onHeaderClick`.
    if (onSort) {
      console.warn('WARNING: `onSort` is being deprecated in favor of `onHeaderClick` for <SortableTable />.');
      onSort(value, order);
    }

    // This replaces `this.props.onSort`.
    this.props.onHeaderClick(value, order);
  }

  makeHeader = (field) => {
    if (field.nonSortable) {
      return <th key={field.value}>{field.label}</th>;
    }

    // Determine what sort order the header will yield on the next click.
    // By default, clicking this header will sort in ascending order.
    // If it’s already ascending, next click will sort it in descending order.
    let nextSortOrder = 'ASC';
    let sortIcon;

    if (this.props.currentSort.value === field.value) {
      const iconClass = classNames({
        fa: true,
        'fas fa-caret-down': this.props.currentSort.order === 'DESC',
        'fas fa-caret-up': this.props.currentSort.order === 'ASC',
      });

      sortIcon = <i className={iconClass} />;

      if (this.props.currentSort.order === 'ASC') {
        nextSortOrder = 'DESC';
      }
    }

    return (
      <th key={field.value}>
        <a
          onClick={this.onHeaderClick(field.value, nextSortOrder)}
          role="button"
          tabIndex="0"
        >
          {field.label}
          {sortIcon}
        </a>
      </th>
    );
  }

  makeRow(item) {
    return (
      <tr key={item.id} className={item.rowClass}>
        {this.props.fields.map(field => (
          <td key={`${item.id}-${field.value}`}>{item[field.value]}</td>
        ))}
      </tr>
    );
  }

  render() {
    const headers = this.props.fields.map(this.makeHeader);
    const rows = this.props.data.map(this.makeRow);
    const tableClass = classNames('va-sortable-table', this.props.className);

    return (
      <table className={tableClass}>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default SortableTable;
