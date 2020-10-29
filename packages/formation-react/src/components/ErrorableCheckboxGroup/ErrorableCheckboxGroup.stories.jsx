import React from 'react';
import ErrorableCheckboxGroup from './ErrorableCheckboxGroup';

export default {
  title: 'Library/ErrorableCheckboxGroup',
  component: ErrorableCheckboxGroup,
  argTypes: {
    label: { control: 'text' },
    id: { control: 'text' },
    errorMessage: { control: 'text' },
    label: { control: 'text' },
    required: { control: 'boolean' },
    options: {
      control: 'object',
    },
    values: {
      control: 'object',
    },
  },
};

const Template = (args) => <ErrorableCheckboxGroup {...args} />;

const defaultArgs = {
  label: 'Errorable Checkbox Group',
  id: 'default',
  errorMessage: 'This is an error message',
  label: 'Errorable Checkboxes',
  required: true,
  options: [
    {
      label: 'Checkbox label',
      value: 'value',
      content: 'a string',
      additional: 'another thing',
    },
    {
      label: 'Checkbox label',
      value: 'value',
      content: 'some more content',
      additional: 'and another thing',
    },
  ],
  values: { key: 'value' },
};

export const Default = Template.bind({});

Default.args = {
  ...defaultArgs,
};
