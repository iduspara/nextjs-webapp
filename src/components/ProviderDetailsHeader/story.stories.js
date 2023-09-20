import React from 'react';
import Component from './component';

export default {
  title: 'Components/Provider Details Header',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftLabel: 'Bewertung',
  rightLabel: 'Produkt',
  ratings: [
    { value: 1, label: 'Bewertung' },
    { value: 2, label: 'positiv' },
    { value: 3, label: 'neutral' },
    { value: 4, label: 'negativ' },
  ],
  products: [
    { value: 1, label: 'Produkt' },
    { value: 2, label: 'DSL' },
    { value: 3, label: 'Handytarif' },
    { value: 4, label: 'Kabel-Internet' },
  ],
};
