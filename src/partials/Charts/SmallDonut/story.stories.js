import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Charts/Small Donut',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  positiveAmount: 60,
  negativeAmount: 30,
};
