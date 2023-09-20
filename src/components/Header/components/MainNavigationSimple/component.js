import React from 'react';
import HeaderLinkList from '../HeaderLinkList/component';

const component = (props) => (
  <div className="main-navigation-simple container hide-tablet-desktop">
    <div className="vertical-scroll-container">
      <ul className="main-navigation-links-level-1">
        <li>
          <HeaderLinkList menuItems={props.headerLinkList} />
        </li>
      </ul>
    </div>
  </div>
);

export default component;
