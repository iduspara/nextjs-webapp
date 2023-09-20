import React from 'react';
import Component from './component';

export default {
  title: 'Context/Experience Portal/Header Provider List',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headlineOne: 'Erfahrungen mit Anbietern',
  headlineTwo: 'Alle Anbieterbewertungen im Überblick',
  text: 'Wir bei Finanztip wollen, dass Du immer rundum informiert bist. Geprüfte Informationen und konkrete Empfehlungen erhältst Du von unserer Experten-Redaktion, beispielsweise in unseren Ratgebern. Tatsächliche Erfahrungen mit den Anbietern kannst Du hier in den Erfahrungsberichten echter Kunden einsehen. <br/><br/>Mach mit! Teile auch Du Deine Erfahrungen und hilf so der Finanztip-Community, sich ein umfassendes Bild von einem Anbieter zu machen.',
  type: 'overview',
  searchFieldLabel: 'Suche nach Anbietern',
  selectOptions: [
    {
      label: 'Kabel-Internet',
      value: 'Kabel-Internet',
    },
    {
      label: 'Baufinanzierung',
      value: 'Baufinanzierung',
    },
    {
      label: 'Festgeld',
      value: 'Festgeld',
    },
    {
      label: 'Tagesgeld',
      value: 'Tagesgeld',
    },
    {
      label: 'Krankenversicherung (gesetzlich)',
      value: 'Krankenversicherung (gesetzlich)',
    },
  ],
  selectPlaceholder: 'alle Produkte',
  providers: [
    {
      name: '1&1',
      logo: 'https://via.placeholder.com/200x50',
      href: 'https://google.com',
      positiveAmount: 25,
      negativeAmount: 25,
      commentsAmount: 12,
      isRecommendation: true,
      searchTags: '1&1 DSL Handytarif Kabel-Internet',
    },
    {
      name: '1822direkt',
      logo: 'https://via.placeholder.com/50x70',
      href: 'https://finanztip.de',
      positiveAmount: 60,
      negativeAmount: 20,
      commentsAmount: 3,
      isRecommendation: true,
      searchTags:
        '1822direkt Autokredit Baufinanzierung Festgeld Girokonto Kredit Kreditkarte Tagesgeld Wertpapierdepot',
    },
    {
      name: 'AOK',
      logo: 'https://via.placeholder.com/200x200',
      href: 'https://yahoo.com',
      positiveAmount: 50,
      negativeAmount: 20,
      commentsAmount: 24,
      isRecommendation: false,
      searchTags:
        'AOK Auslandskrankenversicherung Krankenversicherung (gesetzlich)',
    },
    {
      name: 'Abcbank',
      logo: 'https://via.placeholder.com/70',
      href: 'https://bing.com',
      positiveAmount: 40,
      negativeAmount: 30,
      commentsAmount: 56,
      isRecommendation: false,
      searchTags: 'Abcbank Festgeld Tagesgeld',
    },
  ],
  title: 'Keine Anbieterbewertungen mit diesen Filtereinstellungen',
  buttonLabel: 'Filter zurücksetzen',
  rightId: 'productfilter',
};
