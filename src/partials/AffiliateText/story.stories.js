import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Affiliate Text',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: '* Was der Stern bedeutet:',
  affiliateText:
    '<p>Finanztip gehört zu 100 Prozent der gemeinnützigen Finanztip Stiftung. Die hat den Auftrag, die Finanzbildung in Deutschland zu fördern. Alle Gewinne, die Finanztip ausschüttet, gehen an die Stiftung und werden dort für gemeinnützige Projekte verwendet – wie etwa unsere Bildungsinitiative Finanztip Schule.</p><p>Wir wollen mit unseren Emp­feh­lungen möglichst vielen Menschen helfen, ihre Finanzen selber zu machen. Daher sind unsere Inhalte kostenlos im Netz verfügbar. Wir finanzieren unsere aufwändige Arbeit mit sogenannten Affiliate Links. Diese Links kennzeichnen wir mit einem Sternchen (*).</p><p>Bei Finanztip handhaben wir Affiliate Links aber anders als andere Websites. Wir verlinken ausschließlich auf Produkte, die vorher von unserer unabhängigen Experten-Redaktion emp­foh­len wurden. Nur dann kann der entsprechende Anbieter einen Link zu diesem Angebot setzen lassen. Geld bekommen wir, wenn Du auf einen solchen Link klickst oder beim Anbieter einen Vertrag abschließt.</p><p>Ob und in welcher Höhe uns ein Anbieter vergütet, hat keinerlei Einfluss auf unsere Emp­feh­lungen. Was Dir unsere Experten empfehlen, hängt allein davon ab, ob ein Angebot gut für Verbraucher ist.</p><p>Mehr Informationen über unsere Arbeitsweise findest Du auf unserer <a href="/ueber-uns/">Über-uns-Seite</a>.</p>',
  className:
    'background-color-gradientup font-ui leading-text-tight font-size-xs',
};
