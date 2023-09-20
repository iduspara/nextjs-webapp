import React from 'react';
// import domready from 'domready';
// import setUpTooltips from '@assets/scripts/helpers/tooltips';

const component = (props) => {
  // domready(setUpTooltips);

  const iconSize = props.tooltipIconSize ? props.tooltipIconSize : 'l';
  const tooltipTitle = props.title
    ? `<h4 class="margin-bottom-s">${props.title}</h4>`
    : '';

  return (
    <span
      className={`icon-info ft-tooltip color-indigo font-size-${iconSize}`}
      data-tooltip-buttontext={props.buttonlabel}
      data-tooltip-text={`${tooltipTitle}${props.tooltip}`}></span>
  );
};

export default component;
