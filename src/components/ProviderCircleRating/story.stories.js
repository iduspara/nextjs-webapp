import React from 'react';
import Component from './component';

export default {
  title: 'Components/Provider Circle Rating',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  donuts: [
    {
      linkHref: '#erfahrungen',
      text: 'Positive (52)',
      value: 1,
      numberWithPercentage: '50%',
      chartColor: '#20b679',
      chartPositionNumberA: 50,
      chartPositionNumberB: 100 - 50,
    },
    {
      linkHref: '#erfahrungen',
      text: 'Negative (12)',
      value: 2,
      numberWithPercentage: '11%',
      chartColor: '#fab347',
      chartPositionNumberA: 11,
      chartPositionNumberB: 100 - 11,
    },
    {
      linkHref: '#erfahrungen',
      text: 'Negative (41)',
      value: 3,
      numberWithPercentage: '39%',
      chartColor: '#FF3744',
      chartPositionNumberA: 39,
      chartPositionNumberB: 100 - 39,
    },
  ],
};
