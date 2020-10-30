import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const createId = (name) => name?.toLowerCase().replace(/\s/g, '-');

function Row({ columns, rowData }) {
  const { key, rowClassName } = rowData;
  /**
   * @param row The object representing columns in this can either be a string for simple tables, a react element,
   *            or an object for tables that need options for individual rows
   * @param column The column name
   */
  const renderRowCell = (row, column) => {
    const columnData = row[column];

    // This handles the case where columnData is a react.element
    let cellData = columnData;
    // Default to column value displayed on desktop
    let mobileHeaderValue = column;

    const stringCellData = (value) => (
      <span className={'vads-u-margin-0'}>{value}</span>
    );

    if (typeof columnData === 'string') {
      cellData = stringCellData(columnData);
    } else if (columnData.value) {
      const { value, mobileHeader } = columnData;

      cellData = typeof value === 'string' ? stringCellData(value) : value;

      if (mobileHeader) {
        mobileHeaderValue = mobileHeader;
      }
    }

    return (
      <>
        <dfn className="medium-screen:vads-u-display--none vads-u-font-weight--bold">
          {mobileHeaderValue}:{' '}
        </dfn>
        {cellData}
      </>
    );
  };

  return (
    <>
      <hr className="responsive-table-row-separator" />
      <tr key={key} className={rowClassName} role="row">
        {columns.map((column, index) => {
          const cellName = createId(column);

          if (index === 0) {
            return (
              <th
                className={`${cellName}-cell`}
                scope="row"
                /* eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role */
                role="rowheader"
                tabIndex="-1"
                key={`${key}-${cellName}`}
              >
                {renderRowCell(rowData, column)}
              </th>
            );
          }
          return (
            <td
              className={`${cellName}-cell`}
              role="cell"
              key={`${key}-${cellName}`}
            >
              {renderRowCell(rowData, column)}
            </td>
          );
        })}
      </tr>
    </>
  );
}

function ResponsiveTable(props) {
  const { columns, data, tableClass } = props;
  const classes = classNames('responsive', tableClass);

  return (
    <table className={classes} role="table">
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <thead role="rowgroup">
        <tr role="row">
          {columns.map((column) => (
            <th key={`${createId(column)}`} role="columnheader" scope="col">
              {column}
            </th>
          ))}
        </tr>
      </thead>

      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <tbody role="rowgroup">
        {data.map((rowData) => (
          <Row key={rowData.key} columns={columns} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
}

ResponsiveTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  tableClass: PropTypes.string,
};

export default ResponsiveTable;
