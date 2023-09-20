import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Product',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '1&1',
  href: '/erfahrungen/1und1/',
  isRecommendation: true,
};
