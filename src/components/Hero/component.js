import React from 'react';
import Image from '@partials/Image/component';

const component = (props) => (
  <div className="hero">
    <div className="hero-left">
      <h1 className="hero-tagline">{props.tagline}</h1>
      <h2 className="hero-headline">{props.headline}</h2>
      <p className="hero-text">{props.text}</p>
    </div>
    <div className="hero-right">
      <Image src={props.image} alt={props.headline} />
    </div>
  </div>
);
export default component;
