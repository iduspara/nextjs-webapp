import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Text',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'best-id-ever',
  text: '<p>Wer heutzutage Geld anlegen will, hat unendlich viele Möglichkeiten: <strong>Aktien, Fonds, Immobilien</strong> oder Zinsprodukte wie das <strong>Sparbuch, Anleihen, Tagesgeld oder Festgeld</strong>.&nbsp;Viele Verbraucher verlieren darüber&nbsp;leicht den Überblick und gehen dann zum Berater bei der Hausbank um die Ecke. Oft kommen sie mit überteuerten Anlage-Produkten wieder heraus.&nbsp;Mit etwas Eigeninitiative ist es aber auch für Einsteiger nicht schwer, <strong>auf eigene Faust</strong> Geld einfach und gut anzulegen. So lässt sich verhindern, dass&nbsp;Vermögen auf niedrig verzinsten Sparkonten kaum Rendite bringt oder unnötig Geld in kostspielige&nbsp;Investments fließt.</p>',
};
