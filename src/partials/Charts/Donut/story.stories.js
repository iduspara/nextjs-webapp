import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Charts/Donut',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
const chartValue = 30;

Default.args = {
  linkHref: '#erfahrungen',
  text: 'Neutral (6)',
  value: 2,
  numberWithPercentage: `${chartValue}%`,
  chartColor: '#fab347',
  chartPositionNumberA: chartValue,
  chartPositionNumberB: 100 - chartValue,
};
