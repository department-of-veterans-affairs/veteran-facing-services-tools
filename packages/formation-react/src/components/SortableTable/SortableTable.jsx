import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash/get';

class SortableTable extends Component {
  static propTypes = {
    // Used to pass custom classes.
    className: PropTypes.string,

    /**
     * Field value to sort by in either ascending or descending order.
     * The `value` must be one of the values in the `fields` prop.
     */
    currentSort: PropTypes.shape({
      value: PropTypes.string.isRequired,
      order: PropTypes.oneOf(['ASC', 'DESC']),
    }).isRequired,

    // Mappings of header labels to properties on the objects in `data`.
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
        renderCustomCell: PropTypes.func,
        rowClass: PropTypes.string,
        values: PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        ),
      }),
    ).isRequired,

    // A callback for when a header is clicked.
    onHeaderClick: PropTypes.func,

    // DEPRECATING in favor of onHeaderClick: A callback for when a header is clicked.
    onSort: PropTypes.func,
  };

  onHeaderClick = (value, order) => () => {
    const { onHeaderClick, onSort } = this.props;

    // This is a legacy prop that is being renamed to `onHeaderClick`.
    if (onSort) {
      console.warn('WARNING: The `onSort` prop is being deprecated in favor of the `onHeaderClick` prop for <SortableTable />.');
      onSort(value, order);
    }

    // Escape early if no `onHeaderClick` prop is provided.
    if (!onHeaderClick) {
      return;
    }

    // This replaces `this.props.onSort`.
    onHeaderClick(value, order);
  }

  renderHeader = (field) => {
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

  renderCell = (item, field) => {
    const renderCustomCell = get(item, 'renderCustomCell');

    // If the item has a `renderCustomCell` property, execute it.
    if (renderCustomCell) {
      return renderCustomCell(field);
    }

    // Otherwise, return the field value in the item.
    return item[field.value];
  }

  renderRow = (item) => {
    const { renderCell } = this;
    const { fields } = this.props;

    return (
      <tr key={item.id} className={item.rowClass}>
        {fields.map(field => (
          <td key={`${item.id}-${field.value}`}>
            {renderCell(item, field)}
          </td>
        ))}
      </tr>
    );
  }

  render() {
    const { className, data, fields } = this.props;

    const headers = fields.map(this.renderHeader);
    const rows = data.map(this.renderRow);
    const tableClass = classNames('va-sortable-table', className);

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
