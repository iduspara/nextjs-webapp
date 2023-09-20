import React from 'react';

const component = (props) => {
  const classes = `spinner size-${props.size} ${props.className} ${
    props.show ? '' : 'hidden'
  }`;

  return <span className={classes}></span>;
};
export default component;
