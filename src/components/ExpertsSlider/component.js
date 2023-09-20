import React from 'react';
import ExpertsSliderContent from '@partials/ExpertsSliderContent/component';

const component = (props) => (
  <div className="experts-slider">
    <h3>{props.headline}</h3>
    <ExpertsSliderContent {...props} />
  </div>
);
export default component;
