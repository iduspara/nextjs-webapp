import React from 'react';
import Component from './component';

export default {
  title: 'Components/Experience Portal Header',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headlineOne: 'Erfahrungen mit 1&1 (0)',
  text: 'Die 1&1 Telecommunication SE ist ein Unternehmen der United Internet Gruppe. Das Unternehmen wurde 1988 gegründet und hat seinen Sitz im rheinland-pfälzischen Montabaur. Es bestehen, laut Veröffentlichungen des Unternehmens, knapp 15 Millionen Kundenverträge.',
  providerLogoUrl:
    'https://www.finanztip.de/fileadmin/images/Anbieterlogos/Logo_Template_1und1.png',
  type: 'default',
  name: '1und1',
};

export const Overview = Template.bind({});
Overview.args = {
  headlineOne: 'Erfahrungen mit Anbietern',
  headlineTwo: 'Alle Anbieterbewertungen im Überblick',
  text: 'Wir bei Finanztip wollen, dass Du immer rundum informiert bist. Geprüfte Informationen und konkrete Empfehlungen erhältst Du von unserer Experten-Redaktion, beispielsweise in unseren Ratgebern. Tatsächliche Erfahrungen mit den Anbietern kannst Du hier in den Erfahrungsberichten echter Kunden einsehen. <br/><br/>Mach mit! Teile auch Du Deine Erfahrungen und hilf so der Finanztip-Community, sich ein umfassendes Bild von einem Anbieter zu machen.',
  type: 'overview',
  searchFieldLabel: 'Suche nach Anbietern',
  selectOptions: [
    {
      label: '1und1',
      value: '11',
    },
    {
      label: 'Vodafone',
      value: 'vo',
    },
    {
      label: 'O2',
      value: '02',
    },
    {
      label: 'Telekom',
      value: 'tel',
    },
  ],
  selectPlaceholder: 'alle Produkte',
};
