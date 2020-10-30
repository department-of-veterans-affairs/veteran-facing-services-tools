import React from 'react';

import ResponsiveTable from './ResponsiveTable';

export default {
  title: 'Library/ResponsiveTable',
  component: ResponsiveTable,
};

const Template = (args) => <ResponsiveTable {...args} />;

const defaultArgs = {
  currentSort: {
    value: 'column1',
    order: 'ASC',
  },
  data: [
    {
      column1: 'Testing',
      column2: 'Moooore testing',
    },
    {
      column1: 'Second row',
      column2: 'Some things',
    },
  ],
  fields: [
    {
      label: 'Column 1',
      value: 'column1',
    },
    {
      label: 'Column 2',
      value: 'column2',
    },
  ],
};

/**
 * Use this for informational purposes.
 */
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
