import React from 'react';

const component = (props) => (
  <ul className={`main-navigation-link-section section-${props.sectionNumber}`}>
    {props.section.map((link, index) => {
      const hiddenClasses = [];
      switch (true) {
        case link.hideOnMobile && link.hideOnTablet && link.hideOnDesktop:
          hiddenClasses.push('hidden');
          break;
        case link.hideOnMobile && link.hideOnTablet:
          hiddenClasses.push('hide-mobile-tablet');
          break;
        case link.hideOnTablet && link.hideOnDesktop:
          hiddenClasses.push('hide-tablet-desktop');
          break;
        case link.hideOnMobile && link.hideOnDesktop:
          hiddenClasses.push('hide-mobile');
          hiddenClasses.push('hide-desktop');
          break;
        case link.hideOnMobile:
          hiddenClasses.push('hide-mobile');
          break;
        case link.hideOnTablet:
          hiddenClasses.push('hide-tablet');
          break;
        case link.hideOnDesktop:
          hiddenClasses.push('hide-desktop');
          break;
        default:
          break;
      }
      return (
        <li key={index} className={hiddenClasses.join(' ')}>
          <a href={link.href} className="navlink">
            {link.label}
          </a>
        </li>
      );
    })}
  </ul>
);

export default component;
