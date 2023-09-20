import React from 'react';
import Component from './component';

export default {
  title: 'Components/Affiliate Recobox',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Girokonto',
  content:
    'Für uns stehen die Produkte der Anbieter im Vordergrund. Alle folgenden haben in unserem ausführlichen Test überzeugt und werden von unser Expertenredaktion empfohlen - auch wenn vielleicht hin und wieder ein Anbieter in puncto Service nicht 100% Vollgas gegeben hat und hier im Erfahrungsportal nicht so gut abschneidet. Warum wir ihn trotzdem empfehlen, kannst du in unserem Ratgeber lesen',
  providers: [
    {
      name: 'DKB',
      link: '/finanztip.test/erfahrungen/dkb/',
      logoImage: 'https://via.placeholder.com/150x70',
      linkCode: 'some-link',
      commentsCounter: '1245',
    },
    {
      name: 'ING',
      link: '/finanztip.test/erfahrungen/dkb/',
      logoImage: 'https://via.placeholder.com/150x70',
      linkCode: '',
      commentsCounter: '1035',
    },
    {
      name: 'BMW',
      link: '/finanztip.test/erfahrungen/bmw/',
      logoImage: 'https://via.placeholder.com/150x70',
      linkCode: '',
      commentsCounter: '45',
    },
    {
      name: 'Cashper',
      link: '/finanztip.test/erfahrungen/cashper/',
      logoImage: 'https://via.placeholder.com/150x70',
      linkCode: '',
      commentsCounter: '342',
    },
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?node-id=10801%3A332876&t=XE3qRccruaL3sVVx-4',
  },
};
