import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Link',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'best-id-ever',
  href: 'https://www.google.com',
  text: '(120) Erfahrungsberichte',
};
