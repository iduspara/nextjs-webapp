import React from 'react';

const component = (props) => (
  <div className="donut-chart">
    <a href={props.linkHref} className="review-link" data-value={props.value}>
      <svg viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#fff"></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="transparent"
          stroke="#f0f0f0"
          strokeWidth="3"></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="transparent"
          stroke={props.chartColor}
          strokeWidth="3"
          strokeDasharray={`${props.chartPositionNumberA} ${props.chartPositionNumberB}`}
          strokeDashoffset="25"></circle>

        <text
          x="50%"
          y="60%"
          dominantBaseline="bottom"
          textDecoration="none"
          textAnchor="middle"
          className="review-count"
          fill="#323232">
          {props.numberWithPercentage}
        </text>
      </svg>
    </a>
    <a
      href={props.linkHref}
      className="review-link text-link"
      data-value={props.value}>
      {props.text}
    </a>
  </div>
);

export default component;
