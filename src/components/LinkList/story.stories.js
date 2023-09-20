import React from 'react';
import testDocument from '@assets/mockdata/test.pdf';
import Component from './component';

export default {
  title: 'Components/Link List',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Recht',
  links: [
    {
      label: 'Document',
      image: 'https://via.placeholder.com/48',
      link: testDocument,
      download: true,
    },
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
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/GkgCDQjZJcszDlsLdTCPet/Library?node-id=12342-47429&t=QzYvFaWxodmC4GDz-4',
  },
};
