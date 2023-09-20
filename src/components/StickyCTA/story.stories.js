import React from 'react';
import Component from './component';

export default {
  title: 'Components/Sticky CTA',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  providerButtonLabel: 'Zum Anbieter*',
  providerButtonType: 'primary',
  providerButtonSmall: true,
  ratingButtonLabel: 'Anbieter bewerten',
  ratingButtonType: 'secondary',
  ratingButtonSmall: true,
  ratingButtonHref: 'https://google.com',
};
