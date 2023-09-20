import React from 'react';
import ExpertsSliderContent from '@partials/ExpertsSliderContent/component';

const component = (props) => (
  <section className="ft-site">
    <div className="frame-type-ftcustomcontentelements_experts">
      <h3>{props.headline}</h3>
      <ExpertsSliderContent {...props} />
    </div>
  </section>
);

export default component;
