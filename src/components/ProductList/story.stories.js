import React from 'react';
import Component from './component';

export default {
  title: 'Components/Product List',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  providerName: '1&1',
  products: [
    {
      name: 'DSL',
      href: 'https://google.com',
      isRecommendation: true,
    },
    {
      name: 'Handytarif',
      href: 'https://finanztip.de',
      isRecommendation: false,
    },
    {
      name: 'Kabelinternet',
      href: 'https://yahoo.com',
      isRecommendation: false,
    },
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?node-id=10793%3A325384&t=9gRH3rrRnP2joSIH-4',
  },
};
