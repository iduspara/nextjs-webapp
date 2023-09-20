import React from 'react';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => (
  // domready(Scripts);

  <a
    href="#"
    className={`overlay-trigger ${props.className}`}
    data-js-overlay={props.overlayId}>
    {props.children}
  </a>
);
export default component;
