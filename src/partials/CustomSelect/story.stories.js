import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Custom Select',
  component: Component,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Country Select',
  tooltip: 'This is a tooltip for the Custom Select.',
  class: 'country-class',
  id: 'country-id',
  name: 'country-name',
  required: 'required',
  disabled: false,
  placeholder: 'Please choose',
  value: 'Germany',
  options: [
    {
      label: 'USA',
      value: 'us',
    },
    {
      label: 'Germany',
      value: 'de',
    },
    {
      label: 'Bulgaria',
      value: 'bg',
    },
    {
      label: 'Iceland',
      value: 'is',
    },
  ],
  error: 'Please choose from the list.',
  errorClass: 'error-custom-class',
  textaddon:
    'Please choose the country you live in out of the list. If your country is not on the list, let your local frontend dev know!',
};
