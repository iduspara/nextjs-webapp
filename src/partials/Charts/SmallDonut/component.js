import React from 'react';

const component = (props) => (
  <svg className="small-donut-chart" viewBox="0 0 40 40">
    <circle
      cx="20"
      cy="20"
      r="17"
      fill="transparent"
      stroke="#fab347"
      strokeWidth="5"></circle>
    <circle
      cx="20"
      cy="20"
      r="17"
      fill="transparent"
      stroke="#20b679"
      strokeWidth="5"
      strokeDasharray={`${props.positiveAmount} ${100 - props.positiveAmount}`}
      strokeDashoffset="0"></circle>
    <circle
      cx="20"
      cy="20"
      r="17"
      fill="transparent"
      stroke="#ff3746"
      strokeWidth="5"
      strokeDasharray={`${props.negativeAmount} ${100 - props.negativeAmount}`}
      strokeDashoffset={`-${props.positiveAmount}`}></circle>
  </svg>
);

export default component;
