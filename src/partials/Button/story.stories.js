import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Button',
  component: Component,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'support'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click here',
  type: 'primary',
  small: false,
  href: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click here',
  type: 'secondary',
  small: false,
  href: '',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Click here',
  type: 'primary',
  small: true,
  href: '',
};

export const Support = Template.bind({});
Support.args = {
  children: ['Unterstütze uns'],
  type: 'support',
  small: true,
  href: '',
};
