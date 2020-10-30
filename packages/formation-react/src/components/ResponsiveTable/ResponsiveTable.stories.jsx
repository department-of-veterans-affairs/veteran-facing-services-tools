import React from 'react';

import ResponsiveTable from './ResponsiveTable';

export default {
  title: 'Library/ResponsiveTable',
  component: ResponsiveTable,
  argTypes: {
    columns: {
      control: {
        type: 'array',
      },
    },
    data: { control: 'array' },
    tableClass: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <ResponsiveTable {...args} />;
const row1Data = {
  'Column 1': 'test',
  'Column 2': 'testt',
  rowClassName: 'row-class-name',
  key: 'row-key',
};

const data = [row1Data, { ...row1Data, column2Header: 'testt2' }];

const defaultArgs = {
  columns: ['Column 1', 'Column 2'],
  data,
  tableClass: 'Alert title',
};

/**
 * Use this for informational purposes.
 */
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
