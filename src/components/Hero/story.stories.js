import React from 'react';
import Component from './component';

export default {
  title: 'Components/Hero',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagline: 'Sichere Geldanlage',
  headline: 'Rechner und Vergleiche',
  text: 'Finanzentscheidungen einfach gemacht: Ausrechnen, Angebote vergleichen und umsetzen. Du willst wissen, wieviel Du heute sparen sollst, damit Du Dir Deine eigene Immobilie leisten kannst? Und dazu am besten gleich die passenden Konten oder Kredite dafür finden? Dann bist Du hier genau richtig! Mit den Rechnern und Vergleichen von Finanztip kannst Du diese Fragen ganz einfach beantworten.',
  image: 'https://via.placeholder.com/357',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/GkgCDQjZJcszDlsLdTCPet/Library?node-id=12356-202437&t=zxIFCqr2chNo9FnV-4',
  },
};
