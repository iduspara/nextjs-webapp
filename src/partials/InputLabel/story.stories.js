import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Input Label',
  component: Component,
  argTypes: {
    tooltipIconSize: {
      options: ['m', 'l'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Input Label',
  id: 'label-id',
  optional: true,
  tooltip: 'This is a tooltip for the label!',
  tooltipIconSize: 'l',
};
