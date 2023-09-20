import React from 'react';
import asteriskText from '@assets/mockdata/asteriskText';
import Component from './component';

export default {
  title: 'Partials/Affiliate Popup Content',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Finanztip Empfehlungen',
  text: 'Wir verlinken ausschließlich auf Produkte, die vorher von unserer unabhängigen Experten-Redaktion empfohlen wurden.',
  guideLabel: 'Zum Ratgeber',
  affiliateLabel: 'Zum Anbieter*',
  moreProductsLabel: 'Weitere DKB Produkte',
  products: [
    {
      productType: 'Girokonto',
      guideLink: 'https://google.com',
      affiliateLink: 'https://finanztip.de',
      recommended: true,
    },
    {
      productType: 'Baufinanzierung',
      guideLink: 'https://google.com',
      recommended: false,
    },
    {
      productType: 'Wertpapierdepot',
      guideLink: 'https://google.com',
      affiliateLink: 'https://finanztip.de',
      recommended: true,
    },
    {
      productType: 'Kredit',
      guideLink: 'https://google.com',
      recommended: false,
    },
  ],
  asteriskText,
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?node-id=10801%3A325677&t=AJixKq8ZnulVuCFv-4',
  },
};
