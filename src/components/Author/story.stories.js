import React from 'react';
import Component from './component';

export default {
  title: 'Components/Author',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  authorName: 'Dr. Britta Beate Schön',
  authorNameSlogan: 'Autorin bei Finanztip',
  authorRole: 'Expertin für Rechtsthemen',
  authorDescription:
    'Britta Beate Schön ist bei Finanztip für sämtliche Rechtsthemen zuständig. Die promovierte Juristin und Rechtsanwältin war als Leiterin der Rechtsabteilung bei Finanzdienstleistern wie der Telis Finanz AG und der Interhyp tätig. Vorher lehrte und forschte sie in Japan als DAAD-Junior-Professorin für deutsches und Europarecht. Ihr Studium absolvierte sie in Münster, Genf, Regensburg und Leipzig. Die Autorin erreichen Sie unter britta.schoen@finanztip.de.',
  socialLinks: [
    {
      type: 'twitter',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'linkedin',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'tiktok',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'facebook',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'xing',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'youtube',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'instagram',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      type: 'e-mail',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },

  ],
};
