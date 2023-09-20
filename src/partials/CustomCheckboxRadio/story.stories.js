import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Custom Checkbox Radio',
  component: Component,
  argTypes: {
    type: {
      options: ['checkbox', 'radio', 'bullet'],
      control: { type: 'select' },
    },
    label: {
      options: [
        'small text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
  id: 'test-id',
  label: 'small text',
  name: 'test-name',
  value: false,
  checked: false,
  required: false,
  disabled: false,
};

export const Radio = Template.bind({});
Radio.args = {
  type: 'radio',
  id: 'test-id',
  label: 'small text',
  name: 'test-name',
  value: false,
  checked: false,
  required: false,
  disabled: false,
};

export const Bullet = Template.bind({});
Bullet.args = {
  type: 'bullet',
  id: 'test-id',
  label: '1',
  name: 'test-name',
  value: false,
  checked: false,
  required: false,
  disabled: false,
  className: 'bullet-group',
};
