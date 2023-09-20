import React from 'react';
import Donut from '@partials/Charts/Donut/component';

const component = (props) => (
  <div className="provider-circle-rating">
    {props.donuts.map((donut, index) => (
      <div key={index}>
        <Donut
          linkHref={donut.linkHref}
          text={donut.text}
          value={donut.value}
          numberWithPercentage={donut.numberWithPercentage}
          chartColor={donut.chartColor}
          chartPositionNumberA={donut.chartPositionNumberA}
          chartPositionNumberB={donut.chartPositionNumberB}
        />
      </div>
    ))}
  </div>
);

export default component;
