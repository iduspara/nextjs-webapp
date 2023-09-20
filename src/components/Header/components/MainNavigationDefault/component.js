import React from 'react';
import MainNavigationLinkSection from './components/MainNavigationLinkSection/component';

const component = (props) => (
  <div className="main-navigation-default">
    <div className="vertical-scroll-container">
      <a className="guides-toggle" onClick={props.handleGuidesToggleClick}>
        <span>Ratgeber</span>
        <span className="icon-chevron-right font-size-l" />
      </a>
      <MainNavigationLinkSection section={props.section1} sectionNumber="1" />
      <MainNavigationLinkSection section={props.section2} sectionNumber="2" />
      <MainNavigationLinkSection section={props.section3} sectionNumber="3" />
    </div>
  </div>
);

export default component;
