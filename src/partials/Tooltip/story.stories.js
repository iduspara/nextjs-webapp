import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Tooltip',
  component: Component,
  argTypes: {
    tooltipIconSize: {
      options: ['m', 'l'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Large = Template.bind({});
Large.args = {
  title: 'Title',
  tooltip: 'This is a tooltip.',
  tooltipIconSize: 'l',
  buttonlabel: 'Understood',
};
