import React from 'react';
import ErrorableCheckbox from './ErrorableCheckbox';

export default {
  title: 'Library/ErrorableCheckbox',
  component: ErrorableCheckbox,
};

const Template = (args) => <ErrorableCheckbox {...args} />;

const defaultArgs = {
  required: true,
  errorMessage: 'Error message',
  label: "I want to type in my school's name and address.",
  labelAboveCheckbox:
    "If you don't find your school in the search results, then check the box to enter in your school information manually.",
};

export const Default = Template.bind({});

Default.args = {
  ...defaultArgs,
};
