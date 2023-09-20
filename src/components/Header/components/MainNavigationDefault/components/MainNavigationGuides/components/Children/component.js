import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { slideToggle } from '@assets/scripts/helpers/animations';
import Grandchildren from './components/Grandchildren/component';

const Component = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    const currentNavSection = event.target.parentElement.parentElement;
    const currentNavLink = event.target.parentElement;
    const grandchildren = currentNavSection.querySelector(
      '.main-navigation-links-level-3'
    );
    const grandchildrenNextLinks = grandchildren.querySelector('.next-items');
    const grandchildrenToggle =
      grandchildren.querySelector('.next-items-toggle');

    // Close extra links in grandchildren if closing level 2 dropdown
    if (grandchildrenNextLinks && currentNavLink.classList.contains('active')) {
      grandchildrenNextLinks.style.maxHeight = '0';
      grandchildrenToggle.innerHTML = grandchildrenToggle.dataset.initial;
    }

    currentNavLink.classList.toggle('active');
    slideToggle(grandchildren);
    setIsActive(!isActive);
  };

  return (
    <ul className="main-navigation-links-level-2">
      {props.menuItems.map((child) => {
        const grandchildren = child.children && (
          <Grandchildren menuItems={child.children} />
        );
        return (
          <li key={child.href} className="main-navigation-section">
            <a href={child.href} className="navlink">
              <span className="second-level-navlink">{child.label}</span>
              <span
                className="icon-chevron-down font-size-l"
                onClick={toggleDropdown}></span>
            </a>
            {grandchildren}
          </li>
        );
      })}
    </ul>
  );
};

Component.propTypes = {
  menuItems: PropTypes.array,
};

export default Component;
