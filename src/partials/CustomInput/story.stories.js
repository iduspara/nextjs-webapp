import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Custom Input',
  component: Component,
  argTypes: {
    type: {
      options: ['text', 'number', 'email'],
      control: { type: 'select' },
    },
    error: {
      options: ['', 'Error Message'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'input-id',
  label: 'Input Field',
  value: '',
  placeholder: 'placeholder',
  type: 'text',
  autoComplete: null,
  className: '',
  max: '',
  min: '',
  name: '',
  pattern: '',
  customError: 'fsdf',
  textAddon: 'my Text Addon',
  error: '',
};
