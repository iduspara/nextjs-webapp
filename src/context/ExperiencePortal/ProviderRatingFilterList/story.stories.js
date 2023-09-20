import React from 'react';
import Component from './component';

export default {
  title: 'Context/Experience Portal/Filter Provider List',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  donuts: [
    {
      linkHref: '#erfahrungen',
      text: 'Positive (3)',
      value: 1,
      numberWithPercentage: '50%',
      chartColor: '#20b679',
      chartPositionNumberA: 50,
      chartPositionNumberB: 100 - 50,
    },
    {
      linkHref: '#erfahrungen',
      text: 'Neutral (8)',
      value: 2,
      numberWithPercentage: '11%',
      chartColor: '#fab347',
      chartPositionNumberA: 11,
      chartPositionNumberB: 100 - 11,
    },
    {
      linkHref: '#erfahrungen',
      text: 'Negative (2)',
      value: 3,
      numberWithPercentage: '39%',
      chartColor: '#FF3744',
      chartPositionNumberA: 39,
      chartPositionNumberB: 100 - 39,
    },
  ],
  leftLabel: 'Bewertung',
  leftId: 'ratingfilter',
  leftName: 'rating',
  rightLabel: 'Produkt',
  rightId: 'productfilter',
  rightName: 'produkt',
  ratings: [
    { value: 0, label: 'Alle' },
    { value: 1, label: 'positiv (3)' },
    { value: 2, label: 'neutral (8)' },
    { value: 3, label: 'negativ (2)' },
  ],
  products: [
    { value: 0, label: 'Alle' },
    { value: 'DSL', label: 'DSL' },
    { value: 'Handytarif', label: 'Handytarif' },
    { value: 'Kabel-Internet', label: 'Kabel-Internet' },
  ],
  numberToShow: 4,
  reviews: [
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'positive',
      product: 'Handytarif',
      dataRating: '1',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'negative',
      product: 'Handytarif',
      dataRating: '3',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'Handytarif',
      dataRating: '2',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'DSL',
      dataRating: '2',
      dataProduct: 'DSL',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'DSL',
      dataRating: '2',
      dataProduct: 'DSL',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'positive',
      product: 'DSL',
      dataRating: '1',
      dataProduct: 'DSL',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'Handytarif',
      dataRating: '2',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'Handytarif',
      dataRating: '2',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'Handytarif',
      dataRating: '2',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Alex B.',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '28.08.2022',
      rating: 'neutral',
      product: 'Handytarif',
      dataRating: '2',
      dataProduct: 'Handytarif',
    },
    {
      author: 'Walter Kieper',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '29.05.2021',
      rating: 'neutral',
      product: 'Kabel-Internet',
      dataRating: '2',
      dataProduct: 'Kabel-Internet',
    },
    {
      author: 'Walter Kieper',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '29.05.2021',
      rating: 'positive',
      product: 'Kabel-Internet',
      dataRating: '1',
      dataProduct: 'Kabel-Internet',
    },
    {
      author: 'Walter Kieper',
      text: 'Bin seit über 15 Jahre Kunde von 1&1 und war stehst zufrieden. Nachdem ich am Telefon Handy Verträge neu auflegen wollte, hatte ich extra auch bei der Bandaufnahme darauf hingewiesen dass es kein Telefonica Netz sein darf, hier hab ich zuhause keinen Empfang, und ich im Vodaphone Netz bleiben muss. Alles kein ',
      moreText:
        '<span class="result-item-details hidden">Problem, bis dann doch Telefonica Karten versandt wurden. Einen Widerruf versendet und nach ca. 3 Wochen neue Vodaphone Karten zu den alten Konditionen erhalten. Diese dann gekündigt, da ich mehr Datenvolumen haben möchte. Bei Kündigungsbestätigung am Telefon mich zu neuen Verträgen überreden lassen, nach mehrmaliger Rücksprache mit Vorgesetztem versprochen worden auf jeden Fall D-Netz.</span>',
      date: '29.05.2021',
      rating: 'negative',
      product: 'Kabel-Internet',
      dataRating: '3',
      dataProduct: 'Kabel-Internet',
    },
  ],
};
