import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Provider',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '1&1',
  logo: 'https://via.placeholder.com/70',
  href: '/erfahrungen/1und1/',
  positiveAmount: 25,
  negativeAmount: 25,
  commentsAmount: 12,
  isRecommendation: true,
  searchTags: '1&1 DSL Handytarif Kabel-Internet',
};
