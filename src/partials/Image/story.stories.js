import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Image',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'This is a placeholder image!',
};
