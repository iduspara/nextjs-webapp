import React from 'react';
import Component from './component';

export default {
  title: 'Components/Author Article',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  articles: [
    {
      title: 'Auto günstig finanzieren',
      link: 'http://www.xing.com/news/pages/finanztip-496',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Diese Rechte hast Du bei Krediten',
      link: 'http://www.xing.com/news/pages/finanztip-496',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Ratenkredit',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Online-Kredit',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Sofortkredit',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Kredit ohne Schufa',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Baufinanzierung',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Another article',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Finanztip Tipps',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Handytarif wechseln',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
    {
      title: 'Handytarif wechseln Teil 2',
      link: 'http://www.xing.com/news/pages/finanztip-496',
    },
  ],
};
