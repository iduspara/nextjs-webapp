import React from 'react';
import Component from './component';

export default {
  title: 'Components/Provider Rating Review',
  component: Component,
  argTypes: {
    rating: {
      options: ['positive', 'neutral', 'negative'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  author: 'Alex B.',
  text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
  moreText:
    '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
  date: '28.08.2022',
  rating: 'neutral',
  dataRating: 2,
  dataProduct: 'DSL',
  product: 'Handytarif',
};
