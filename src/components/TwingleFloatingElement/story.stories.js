import React from 'react';
import mockText from '@assets/mockdata/fakeText';
import Component from './component';

export default {
  title: 'Components/TwingleFloatingElement',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  twingleId: 'twingle-floating-element',
  title: 'Unterstütze uns',
  children: 'Unterstütze uns',
  btnType: 'support',
  message:
    'Mit deinem Beitrag unterstützt du uns bei der unabhängigen Recherche für unsere Ratgeber.',
  content: mockText,
  testContent: mockText,
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5x5Ejm0KylMRrzwvkXtARY/Finanztip-Unterst%C3%BCtzer?node-id=14-9133&t=pVih0ukULRoNcI2d-0',
  },
};
