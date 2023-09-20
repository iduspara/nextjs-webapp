import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Overlay from '@shared/Overlay/component';
import MainNavigationDefault from '../MainNavigationDefault/component';
import MainNavigationGuides from '../MainNavigationDefault/components/MainNavigationGuides/component';
import MainNavigationSimple from '../MainNavigationSimple/component';

const Component = (props) => {
  const [guidesActive, setGuidesActive] = useState(false);

  if (!props.isMenuOpen && guidesActive) {
    setGuidesActive(false);
  }

  const closeGuides = () => {
    setGuidesActive(false);
  };

  const openGuides = () => {
    setGuidesActive(true);
  };

  const MainNavigation = props.simple ? (
    <MainNavigationSimple headerLinkList={props.headerLinkList} />
  ) : (
    <MainNavigationDefault
      menuItems={props.menuItems}
      headerLinkList={props.headerLinkList}
      section1={props.section1}
      section2={props.section2}
      section3={props.section3}
      handleGuidesToggleClick={openGuides}
    />
  );

  const Guides = props.simple ? null : (
    <MainNavigationGuides
      menuItems={props.menuItems}
      isActive={guidesActive}
      handleGuidesToggleClick={closeGuides}
    />
  );

  return (
    <nav className="main-navigation" role="navigation">
      <Overlay
        id="menu-overlay"
        sidebar={true}
        isActive={props.isMenuOpen}
        closeOverlayCallback={props.handleCloseOverlay}>
        {MainNavigation}
      </Overlay>
      {Guides}
    </nav>
  );
};

Component.propTypes = {
  simple: PropTypes.bool,
  menuItems: PropTypes.array,
  headerLinkList: PropTypes.array,
  section1: PropTypes.array,
  section2: PropTypes.array,
  section3: PropTypes.array,
  isMenuOpen: PropTypes.bool,
  handleCloseOverlay: PropTypes.func,
};

export default Component;
