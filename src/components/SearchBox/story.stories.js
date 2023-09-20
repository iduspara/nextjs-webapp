import React from 'react';
import Component from './component';

export default {
  title: 'Components/Search Box',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Wobei können wir helfen?',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?type=design&node-id=8-16449&t=fHYwis2mDfwgyksY-4',
  },
};
