import React from 'react';

import IconHelp from './IconHelp';

export default {
  title: 'Library/IconHelp',
  component: IconHelp,
};

const Template = args => <IconHelp {...args} />;

const defaultArgs = {
  color: 'red',
  id: 'help-icon',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
