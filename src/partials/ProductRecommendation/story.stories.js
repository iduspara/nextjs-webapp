import React from 'react';
import Component from './component';

export default {
  title: 'Partials/ProductReccomendation',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
