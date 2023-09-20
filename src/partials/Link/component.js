import React from 'react';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const { href, text, id } = props;

  return (
    <a id={id} href={href}>
      {text}
    </a>
  );
};

export default component;
