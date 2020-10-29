import React, { useState } from 'react';
import ErrorableDate from './ErrorableDate';

export default {
  title: 'Library/ErrorableDate',
  component: ErrorableDate,
  argTypes: {
    required: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    requiredMessage: { control: 'text' },
    invalidMessage: { control: 'text' },
  },
};

const Template = (args) => {
  const [date, setDate] = useState({
    day: {
      value: '14',
      dirty: false,
    },
    month: {
      value: '4',
      dirty: false,
    },
    year: {
      value: '1983',
      dirty: false,
    },
  });
  return (
    <div>
      <ErrorableDate
        {...args}
        date={date}
        onValueChange={(date) => setDate(date)}
      />
    </div>
  );
};

const defaultArgs = {
  required: true,
  label: 'Please tell us a date',
  name: 'Errorable Date',
  requiredMessage: 'Please provide a response',
  invalidMessage: 'Please provide a valid date',
};

export const Default = Template.bind({});

Default.args = {
  ...defaultArgs,
};
