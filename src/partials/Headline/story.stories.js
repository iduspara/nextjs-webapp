import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Headline',
  component: Component,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3'],
      control: { type: 'select' },
    },
    class: {
      options: ['', 'h1', 'h2', 'h3', 'tagline'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const H1 = Template.bind({});
H1.args = {
  children: 'Headline',
  type: 'h1',
  class: '',
};
