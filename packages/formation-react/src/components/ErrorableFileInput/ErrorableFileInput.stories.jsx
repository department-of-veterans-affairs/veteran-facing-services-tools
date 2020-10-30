import React from 'react';
import ErrorableFileInput from './ErrorableFileInput';

export default {
  title: 'Library/ErrorableFileInput',
  component: ErrorableFileInput,
};

const Template = (args) => <ErrorableFileInput {...args} />;

const defaultArgs = {
  buttonText: 'Upload some files',
  errorMessage: 'Error message',
  onChange: () => {
    alert('uploaded file');
  },
};

export const Default = Template.bind({});

Default.args = {
  ...defaultArgs,
};
