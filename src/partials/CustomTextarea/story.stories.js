import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Custom Textarea',
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
    textAddon: {
      options: ['', 'my text addon'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textarea-id',
  label: 'Textarea',
  value: '',
  placeholder: 'placeholder',
  autoComplete: null,
  cutomClass: '',
  max: '',
  min: '',
  name: '',
  customError: 'fsdf',
  textAddon: '',
  error: '',
};
