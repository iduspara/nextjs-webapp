'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './components/HeaderBar/component';
import MainNavigation from './components/MainNavigation/component';
import MainNavigationBar from './components/MainNavigationBar/component';

const Component = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleBurgerNavClick = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleSearchClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseOverlay = () => {
    setIsMenuOpen(false);
  };

  const mainNaviBar = props.noMainNaviBar ? null : (
    <MainNavigationBar
      menuItems={props.menuItems}
      headerLinkList={props.linkListItems}
    />
  );

  return (
    <div className="header">
      <HeaderBar
        logoSrc={props.logoSrc}
        noSearch={props.noSearch}
        noMenuDesktop={props.noMenuDesktop}
        linkListItems={props.linkListItems}
        burgerNavClick={handleBurgerNavClick}
        SearchClick={handleSearchClick}
        isMenuOpen={isMenuOpen}
        isSearchOpen={isSearchOpen}
      />
      <MainNavigation
        menuItems={props.menuItems}
        headerLinkList={props.linkListItems}
        section1={props.section1}
        section2={props.section2}
        section3={props.section3}
        simple={props.simple}
        isMenuOpen={isMenuOpen}
        handleCloseOverlay={handleCloseOverlay}
      />
      {mainNaviBar}
    </div>
  );
};

Component.propTypes = {
  logoSrc: PropTypes.string,
  noSearch: PropTypes.bool,
  noMenuDesktop: PropTypes.bool,
  noMainNaviBar: PropTypes.bool,
  simple: PropTypes.bool,
  menuItems: PropTypes.array,
  linkListItems: PropTypes.array,
  section1: PropTypes.array,
  section2: PropTypes.array,
  section3: PropTypes.array,
};

export default Component;
