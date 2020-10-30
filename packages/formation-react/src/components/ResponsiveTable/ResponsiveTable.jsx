import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const borderClasses =
  'vads-u-border-top--0 vads-u-border-right--0 vads-u-border-left--0 vads-u-font-family--sans vads-u-padding--0 vads-u-padding-y--0p5 medium-screen:vads-u-padding--1';
const rowPaddingClass = 'vads-u-padding-y--2';

function ResponsiveTable(props) {
  const { currentSort, fields, data, ariaLabelledBy } = props;

  const renderHeader = (field) => {
    if (field.nonSortable) {
      return <th key={field.value}>{field.label}</th>;
    }

    let sortIcon;

    if (currentSort?.value === field.value) {
      const iconClass = classNames({
        fa: true,
        'fas fa-caret-down': currentSort.order === 'DESC',
        'fas fa-caret-up': currentSort.order === 'ASC',
      });

      sortIcon = <i className={iconClass} />;
    }

    return (
      <th
        key={field.value}
        className={borderClasses}
        role="columnheader"
        scope="col"
      >
        <button className="va-button-link vads-u-font-weight--bold vads-u-color--base vads-u-text-decoration--none">
          {field.label}
          {sortIcon}
        </button>
      </th>
    );
  };

  const renderRow = (item, rowIndex) => {
    return (
      <tr
        key={rowIndex}
        className={`${borderClasses} ${rowPaddingClass}`}
        role="row"
      >
        {fields.map((field, index) => {
          // The text-align class is to right align the amount field and account number fields
          // since they are numeric

          return (
            <td
              data-index={index}
              className={classNames(borderClasses, {
                'vads-u-text-align--left': field.alignLeft,
              })}
              data-label={`${field.label}:`}
              key={`${rowIndex}-${field.label}`}
              role="cell"
            >
              {item[field.value] === null ? '---' : item[field.value]}
            </td>
          );
        })}
      </tr>
    );
  };

  const headers = fields.map(renderHeader);
  const rows = data.map(renderRow);

  return (
    <table aria-labelledby={ariaLabelledBy} className="responsive" role="table">
      <thead>
        <tr role="row">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

ResponsiveTable.propTypes = {
  ariaLabelledBy: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      nonSortable: PropTypes.boolean,
      alignLeft: PropTypes.boolean,
    }),
  ),
  currentSort: PropTypes.shape({
    value: PropTypes.string,
    order: PropTypes.string,
  }),
};
export default ResponsiveTable;
