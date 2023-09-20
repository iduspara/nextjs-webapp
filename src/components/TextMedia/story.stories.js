import React from 'react';
import Component from './component';

export default {
  title: 'Components/Text Media',
  component: Component,
  argTypes: {
    backgroundColor: {
      options: ['white', 'skyblue', 'orange', 'lightgrey'],
      control: { type: 'select' },
    },
    buttonType: {
      options: ['primary', 'secondary', 'support'],
      control: { type: 'select' },
    },
    imagePosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'white',
  imagePosition: 'left',
  tagline: 'Für mehr Finanzbildung',
  headline: 'Werde Finanztip Unterstützer',
  text: '<p>Als Teil der gemeinnützigen Finanztip Stiftung ist unsere Mission, die finanzielle Bildung in Deutschland zu fördern. Mit Deinem Beitrag hilfst du, noch mehr Menschen zu erreichen.</p>',
  buttonType: '',
  buttonLink: '',
  buttonLabel: '',
  buttonTarget: '',
  image:
    'https://www.finanztip.de/fileadmin/_processed_/0/2/csm_Spendenglas-quadratisch_V4_edc499cf04.png',
};

export const SkyBlue = Template.bind({});
SkyBlue.args = {
  backgroundColor: 'skyblue',
  imagePosition: 'left',
  tagline: 'Für mehr Finanzbildung',
  headline: 'Werde Finanztip Unterstützer',
  text: '<p>Als Teil der gemeinnützigen Finanztip Stiftung ist unsre Mission, die finanzielle Bildung in Deutschland zu fördern. Mit Deinem Beitrag hilfst du, noch mehr Menschen zu erreichen.</p>',
  buttonType: 'support',
  buttonLink: 'https://www.finanztip.de/unterstuetzung',
  buttonLabel: 'Unterstütze uns',
  buttonTarget: '_blank',
  image:
    'https://www.finanztip.de/fileadmin/_processed_/0/2/csm_Spendenglas-quadratisch_V4_edc499cf04.png',
};

export const ImgRight = Template.bind({});
ImgRight.args = {
  backgroundColor: 'white',
  imagePosition: 'right',
  tagline: 'Für mehr Finanzbildung',
  headline: 'Werde Finanztip Unterstützer',
  text: '<p>Als Teil der gemeinnützigen Finanztip Stiftung ist unsre Mission, die finanzielle Bildung in Deutschland zu fördern. Mit Deinem Beitrag hilfst du, noch mehr Menschen zu erreichen.</p>',
  buttonType: '',
  buttonLink: '',
  buttonLabel: '',
  buttonTarget: '',
  image:
    'https://www.finanztip.de/fileadmin/_processed_/0/2/csm_Spendenglas-quadratisch_V4_edc499cf04.png',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5x5Ejm0KylMRrzwvkXtARY/Finanztip-Unterst%C3%BCtzer?node-id=211-22367&t=6hAVSpjNUGHXHVK6-4',
  },
};

SkyBlue.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5x5Ejm0KylMRrzwvkXtARY/Finanztip-Unterst%C3%BCtzer?node-id=211-22367&t=6hAVSpjNUGHXHVK6-4',
  },
};

ImgRight.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5x5Ejm0KylMRrzwvkXtARY/Finanztip-Unterst%C3%BCtzer?node-id=211-22367&t=6hAVSpjNUGHXHVK6-4',
  },
};
