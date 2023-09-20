import React from 'react';
import Component from './component';

export default {
  title: 'Context/TYPO3/Overview Page',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  hero: {
    tagline: 'Sichere Geldanlage',
    headline: 'Rechner und Vergleiche',
    text: 'Finanzentscheidungen einfach gemacht: Ausrechnen, Angebote vergleichen und umsetzen. Du willst wissen, wieviel Du heute sparen sollst, damit Du Dir Deine eigene Immobilie leisten kannst? Und dazu am besten gleich die passenden Konten oder Kredite dafür finden? Dann bist Du hier genau richtig! Mit den Rechnern und Vergleichen von Finanztip kannst Du diese Fragen ganz einfach beantworten.',
    image: 'https://via.placeholder.com/357',
  },
  linkLists: [
    {
      links: [
        {
          label: 'Haushaltsrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/haushaltsrechner/#c91477',
        },
        {
          label: 'Zinsrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/zinsrechner/#c89488',
        },
        {
          label: 'Sparrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/sparplanrechner/#c89493',
        },
        {
          label: 'Finanzielle Freiheit',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/frugalismus-finanzielle-freiheit/#c91296',
        },
        {
          label: 'Renditerechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/renditerechner/#c91376',
        },
        {
          label: 'Zinssatzrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/zinssatzrechner/',
        },
        {
          label: 'Stromvergleich',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/stromvergleich/',
        },
        {
          label: 'Gasvergleich',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/gaspreisvergleich/',
        },
        {
          label: 'Girokontovergleich',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/girokonto-vergleich/#c79414',
        },
      ],
    },
    {
      headline: 'Anlegen',
      links: [
        {
          label: 'Girokonto',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/girokonto-vergleich/#c79414',
        },
        {
          label: 'Tagesgeldkonto',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/tagesgeldvergleich/#c78681',
        },
        {
          label: 'Festgeldkonto',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/festgeld-vergleich/#c78662',
        },
        {
          label: 'Erfolgschancen Bank­ge­büh­ren-Erstattung',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/erfolgschancen-bankgebuehren-bgh-urteil/',
        },
        {
          label: 'Fondsrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/fondsrechner/#c91368',
        },
      ],
    },
    {
      headline: 'Kredit & Bauen',
      links: [
        {
          label: 'Kreditvergleichrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/kredit/verbundene-darlehensvertraege/#c84952',
        },
        {
          label: 'Hypothekenrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/hypothekenrechner/#c78939',
        },
        {
          label: 'Tilgungsrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/tilgungsrechner/#c80731',
        },
      ],
    },
    {
      headline: 'Energie & Medien',
      links: [
        {
          label: 'Gasvergleich',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/gaspreisvergleich/',
        },
        {
          label: 'Stromvergleich',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/stromvergleich/',
        },
        {
          label: 'Handy-Tarifrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/handy-tarifrechner/#c79873',
        },
      ],
    },
    {
      headline: 'Auto & Reisen',
      links: [
        {
          label: 'Fluggastrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/flugaenderung-pauschalreise/#c80199',
        },
        {
          label: 'Autokostenrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/autokostenrechner/',
        },
        {
          label: 'Spritrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/spritrechner/#c89790',
        },
      ],
    },
    {
      headline: 'Recht & Steuern',
      links: [
        {
          label: 'Mehrwertsteuerrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/mehrwertsteuerrechner/#c89896',
        },
        {
          label: 'Stundenlohnrechner',
          image: 'https://via.placeholder.com/48',
          link: 'https://www.finanztip.de/rechner/stundenlohnrechner/#c89725',
        },
      ],
    },
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?node-id=11995-336135&t=LypJYvICsGPSpYTq-4',
  },
};
