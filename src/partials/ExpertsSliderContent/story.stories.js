import React from 'react';
import Component from './component';

export default {
  title: 'Partials/Experts Slider Content',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  subline:
    'Unserer Redaktion besteht aus knapp 30 ExpertInnen zu allen Geldthemen. Wir sind zu 100% unabhängig, recherchieren sauber, arbeiten fundiert und setzen uns jeden Tag dafür ein, dir deine persönlichen Finanzen so einfach wie möglich zu machen.',
  showAllButtonLink: '/ueber-uns-team/',
  showAllButtonLabel: 'Alle Experten ansehen',
  experts: [
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Saidi Sulilatu',
      category: 'Finanztip-Experte',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Veronika Schmalzried',
      category: 'Private Finanzen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Ines Rutschmann',
      category: 'Energie',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Timo Halbe',
      category: 'Bank und Börse',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Sandra Duy',
      category: 'Energetische Sanierung',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Emil Nefzger',
      category: 'Private Finanzen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Josefine Lietzau',
      category: 'Bank und Kredit',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Janna Wörner',
      category: 'Private Finanzen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Dirk Eilinghoff',
      category: 'Bank und Börse',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Jan Pohlmann',
      category: 'Deals',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Kathrin Gotthold',
      category: 'Versicherungen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Jörg Leine',
      category: 'Steuern',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Markus Grimm',
      category: 'Private Finanzen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Dr. Britta Beate Schön',
      category: 'Recht',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Barbara Weber',
      category: 'Recht',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Julia Rieder',
      category: 'Versicherungen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Hendrik Buhrs',
      category: 'Bank und Börse',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Xenia Fuhrmann',
      category: 'Private Finanzen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Anika Görner',
      category: 'Female Finance',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Hermann-Josef Tenhagen',
      category: 'Finanztip-Chefredakteur',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Henriette Neubert',
      category: 'Versicherungen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Jonas Fehling',
      category: 'Private Finanzen',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Salim Rehan',
      category: 'Telekommunikation',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Anja Ciechowski',
      category: 'Bank und Vorsorge',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Martin Klotz',
      category: 'Vorsorge',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Benjamin Weigl',
      category: 'Energie',
    },
    {
      image: 'https://via.placeholder.com/120x120',
      name: 'Jan Scharpenberg',
      category: 'Rente',
    },
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?node-id=8%3A16452&t=8hXKwnNEmqdUbUu9-4',
  },
};
