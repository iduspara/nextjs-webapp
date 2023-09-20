import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Filter Error Bar',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Keine Anbieterbewertungen mit diesen Filtereinstellungen',
  buttonLabel: 'Filter zurücksetzen',
  show: true,
};
