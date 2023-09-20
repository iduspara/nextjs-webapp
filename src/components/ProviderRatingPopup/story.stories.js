import React from 'react';
import Component from './component';

export default {
  title: 'Components/Provider Rating Popup',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Wie war Deine Erfahrung mit dem Anbieter 1&1',
  popupTitle: 'Bewertung zu 1&1',
  textareaPlaceholder: 'Dein Erfahrungsbericht',
  text: '<p>Lorem ipsum dolor sit amet...</p>',
  ctaLabel: 'Bewertung abschicken',
  show: true,
  ratingOptions: [
    { value: 'positiv', label: 'Positive Erfahrung' },
    { value: 'neutral', label: 'Neutrale Erfahrung' },
    { value: 'negativ', label: 'Negative Erfahrung' },
  ],
  productOptions: [
    { value: 2, label: 'DSL' },
    { value: 3, label: 'Handy' },
    { value: 4, label: 'Festnetz' },
  ],
};
