import React from 'react';
import Component from './component';

export default {
  title: 'Components/Provider Suggestion',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Du konntest Deinen Anbieter nicht finden?',
  subline:
    'Dann lass es uns wissen, zu welchem Anbieter Du gerne einen Erfahrungsbericht erstellen möchtest.',
  firstLabel:
    'Zu welchem Anbieter würdest Du gerne einen Erfahrungsbericht erstellen?',
  secondLabel: 'Dein Name',
};
