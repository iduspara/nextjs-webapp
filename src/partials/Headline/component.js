import React from 'react';

const component = (props) => {
  const element = React.createElement(
    props.type,
    { className: props.class },
    props.children
  );

  return <>{element}</>;
};

export default component;
