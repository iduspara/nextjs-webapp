import React from 'react';
import '@assets/styles/main.scss';
import navigation from '@assets/mockdata/navigation';
import Header from '@components/Header/component';
import Footer from '@components/Footer/component';

export default function RootLayout({ children }) {
  return (
    <>
      <main className="main-content no-main-navigation-bar">
        <Header
          logoSrc="https://www.finanztip.de/typo3conf/ext/ft_site/Resources/Public/images/finanztip-logo.svg?1659527542"
          menuItems={navigation}
          noMainNaviBar={true}
          linkListItems={[
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
          ]}
          section1={[
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
          ]}
          section2={[
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
          ]}
          section3={[
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
          ]}
        />
        {children}
        <svg className="zero-height">
          <defs>
            <filter id="slate">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0.14  0     0     0     0
  0     0.19  0     0     0
  0     0     0.22  0     0
  0     0     0     1     0 "></feColorMatrix>
            </filter>
          </defs>
          <defs>
            <filter id="orange">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0.99  0     0     0     0
  0     0.43  0     0     0
  0     0     0.27  0     0
  0     0     0     1     0 "></feColorMatrix>
            </filter>
          </defs>
          <defs>
            <filter id="indigo">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0.27  0     0     0     0
  0     0.31  0     0     0
  0     0     0.87  0     0
  0     0     0     1     0 "></feColorMatrix>
            </filter>
          </defs>
          <defs>
            <filter id="grey">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0.57  0     0     0     0
  0     0.60  0     0     0
  0     0     0.60  0     0
  0     0     0     1     0  "></feColorMatrix>
            </filter>
          </defs>
          <defs>
            <filter id="white">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="1     0     0     0     0
  0     1     0     0     0
  0     0     1     0     0
  0     0     0     1     0  "></feColorMatrix>
            </filter>
          </defs>
          <defs>
            <filter id="coral">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="1     0     0     0     0
  0     0.216 0     0     0
  0     0     0.275 0     0
  0     0     0     1     0  "></feColorMatrix>
            </filter>
          </defs>
          <defs>
            <filter id="spring">
              <feColorMatrix
                colorInterpolationFilters="sRGB"
                type="matrix"
                values="0.127 0     0     0     0
  0     0.714 0     0     0
  0     0     0.475 0     0
  0     0     0     1     0  "></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </main>
      <Footer />
    </>
  );
}
