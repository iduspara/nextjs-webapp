import React from 'react';
import Component from './component';

export default {
  title: 'Components/Provider List',
  component: Component,
  argTypes: {
    rating: {
      options: ['positive', 'neutral', 'negative'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  providers: [
    {
      name: '1&1',
      logo: 'https://via.placeholder.com/200x50',
      href: 'https://google.com',
      positiveAmount: 25,
      negativeAmount: 25,
      commentsAmount: 12,
      isRecommendation: true,
      searchTags: '1&1 DSL Handytarif Kabel-Internet',
    },
    {
      name: '1&1',
      logo: 'https://via.placeholder.com/50x70',
      href: 'https://finanztip.de',
      positiveAmount: 60,
      negativeAmount: 20,
      commentsAmount: 3,
      isRecommendation: true,
      searchTags: '1&1 DSL Handytarif Kabel-Internet',
    },
    {
      name: '1&1',
      logo: 'https://via.placeholder.com/200x200',
      href: 'https://yahoo.com',
      positiveAmount: 50,
      negativeAmount: 20,
      commentsAmount: 24,
      isRecommendation: false,
      searchTags: '1&1 DSL Handytarif Kabel-Internet',
    },
    {
      name: '1&1',
      logo: 'https://via.placeholder.com/70',
      href: 'https://bing.com',
      positiveAmount: 40,
      negativeAmount: 30,
      commentsAmount: 56,
      isRecommendation: false,
      searchTags: '1&1 DSL Handytarif Kabel-Internet',
    },
  ],
};
