import React from 'react';

const component = (props) => (
  <div className={`finanztip-grid grid-size-${props.size} ${props.className}`}>
    {props.children}
  </div>
);

export default component;
