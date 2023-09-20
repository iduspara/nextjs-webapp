import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Spinner',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Small = Template.bind({});
Small.args = {
  show: true,
  className: '',
  size: 's',
}
export const Medium = Template.bind({});
Medium.args = {
  show: true,
  className: '',
  size: 'm',
}
export const Large = Template.bind({});
Large.args = {
  show: true,
  className: '',
  size: 'l',
}