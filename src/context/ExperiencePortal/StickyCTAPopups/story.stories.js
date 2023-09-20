import React from 'react';
import asteriskText from '@assets/mockdata/asteriskText';
import bodyText from '@assets/mockdata/fakeText';
import Component from './component';

export default {
  title: 'Context/Experience Portal/Sticky Affiliate Popup',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  stickyCTA: {
    providerButtonLabel: 'Zum Anbieter*',
    providerButtonType: 'primary',
    providerButtonSmall: true,
    ratingButtonLabel: 'Anbieter bewerten',
    ratingButtonType: 'secondary',
    ratingButtonSmall: true,
    ratingButtonHref: 'https://google.com',
  },
  affiliatePopup: {
    show: false,
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
  },
  providerRatingPopup: {
    headline: 'Wie war Deine Erfahrung mit dem Anbieter 1&1',
    popupTitle: 'Bewertung zu 1&amp;1',
    textareaPlaceholder: 'Dein Erfahrungsbericht',
    text: '<p>Lorem ipsum dolor sit amet...</p>',
    ctaLabel: 'Bewertung abschicken',
    ratingOptions: [
      { value: 'positiv', label: 'Positive Erfahrung' },
      { value: 'neutral', label: 'Neutrale Erfahrung' },
      { value: 'negativ', label: 'Negative Erfahrung' },
    ],
    productOptions: [
      { value: 2, label: 'DSL' },
      { value: 3, label: 'Handy' },
      { value: 4, label: 'Festnetz' },
    ],
  },
  bodyText,
};
