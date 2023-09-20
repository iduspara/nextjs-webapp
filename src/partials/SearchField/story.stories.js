import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Search Field',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const WithButton = Template.bind({});
WithButton.args = {
  placeholder: 'Suche nach Anietern',
  buttonLabel: 'Suchen',
  withButton: true,
};

export const NoButton = Template.bind({});
NoButton.args = {
  placeholder: 'Suche nach Anietern',
  buttonLabel: 'Suchen',
  withButton: false,
};
