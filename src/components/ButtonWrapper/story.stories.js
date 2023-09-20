import React from 'react';
import Component from './component';

export default {
  title: 'Components/Button Wrapper',
  component: Component,
  argTypes: {
    buttonType: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonType: 'primary',
  buttonLabel: 'Absenden',
};
