import React from 'react';
import Button from '@partials/Button/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => (
  // domready(Scripts);

  <div className="experts-slider-content">
    <div className="subline">
      <p>{props.subline}</p>
    </div>
    <ul className="slider">
      {props.experts.map((expert, index) => (
        <li key={index}>
          <img
            className="border-radius-circle sm:no-margin-bottom"
            src={expert.image}
            alt={expert.name}
          />
          <strong>{expert.name}</strong>
          <small>{expert.category}</small>
        </li>
      ))}
    </ul>
    <Button href={props.showAllButtonLink}>{props.showAllButtonLabel}</Button>
  </div>
);
export default component;
