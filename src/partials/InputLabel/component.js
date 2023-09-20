import React from 'react';
import Tooltip from '@partials/Tooltip/component';

const component = (props) => {
  const optional = props.optional ? (
    <span className="input-optional">Optional</span>
  ) : null;
  const tooltip = props.tooltip ? (
    <Tooltip tooltip={props.tooltip} tooltipIconSize={props.tooltipIconSize} />
  ) : null;

  return (
    <div className="input-label">
      <label htmlFor={props.id}>{props.children}</label>
      {optional}
      {tooltip}
    </div>
  );
};

export default component;
