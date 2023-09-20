import React from 'react';
import navigation from '@assets/mockdata/navigation';
import Component from './component';

export default {
  title: 'Components/Header',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoSrc: 'https://via.placeholder.com/140x28',
  noSearch: false,
  noMenuDesktop: false,
  noMainNaviBar: false,
  simple: false,
  menuItems: navigation,
  linkListItems: [
    {
      label: 'App',
      href: '/app/',
    },
    {
      label: 'Newsletter',
      href: '/newsletter/',
    },
    {
      label: 'Über uns',
      href: '/ueber-uns/',
    },
  ],
  section1: [
    {
      label: 'Vergleiche & Rechner',
      href: '/rechner/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
    {
      label: 'Checklisten & Vorlagen',
      href: '/checklisten-und-vorlagen/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
  ],
  section2: [
    {
      label: 'App',
      href: '/app/',
      hideOnMobile: false,
      hideOnTablet: true,
      hideOnDesktop: true,
    },
    {
      label: 'Newsletter',
      href: '/newsletter/',
      hideOnMobile: false,
      hideOnTablet: true,
      hideOnDesktop: true,
    },
    {
      label: 'Erfahrungsportal',
      href: '/erfahrungen/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
    {
      label: 'Deals',
      href: '/deals/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
    {
      label: 'Forum',
      href: '/linkliste-header/forum/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
  ],
  section3: [
    {
      label: 'Über uns',
      href: '/ueber-uns/',
      hideOnMobile: false,
      hideOnTablet: true,
      hideOnDesktop: true,
    },
    {
      label: 'Finanztip Stiftung',
      href: 'https://www.finanztip-stiftung.de/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
    {
      label: 'Finanztip Schule',
      href: 'https://www.finanztip.schule/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
    {
      label: 'Karriere',
      href: 'https://finanztip.jobs.personio.de/',
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vIHBkR7Kw0Zfg6tXcHWI2y/Website-UI?node-id=8945%3A78056&t=8KQPIqa5URPd5in8-4',
  },
};

export const Simple = Template.bind({});
Simple.args = {
  logoSrc: 'https://via.placeholder.com/140x28',
  noSearch: true,
  noMenuDesktop: true,
  noMainNaviBar: true,
  simple: true,
  menuItems: navigation,
  linkListItems: [
    {
      label: 'Unterrichtsmaterial',
      href: '/unterrichtsmaterial/',
    },
    {
      label: 'Spiele im Unterricht',
      href: '/spiele-im-unterricht/',
    },
    {
      label: 'Kontakt',
      href: '/kontakt/',
    },
    {
      label: 'Anmeldung',
      href: '/anmeldung/',
    },
  ],
};
