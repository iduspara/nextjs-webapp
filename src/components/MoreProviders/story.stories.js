import React from 'react';
import Component from './component';

export default {
  title: 'Components/More Providers',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Weitere Anbieter',
  shwowAllProvidersLink: '...',
  providers: [
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      a: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: 'Voda',
      image: 'https://via.placeholder.com/5000x150',
      link: 'link',
    },
    {
      name: 'O2',
      image: 'https://via.placeholder.com/5000x100',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
    {
      name: '1&1',
      image: 'https://via.placeholder.com/150x70',
      link: 'link',
    },
  ],
};
