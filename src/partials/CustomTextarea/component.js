import React from 'react';
import InputLabel from '@partials/InputLabel/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const label = props.label ? (
    <div className="margin-bottom-s">
      <InputLabel
        optional={props.optional}
        tooltip={props.tooltip}
        tooltipIconSize={props.tooltipIconSize}
        id={props.name}>
        {props.label}
      </InputLabel>
    </div>
  ) : null;

  return (
    <>
      {label}
      <textarea
        className={`custom-textarea ${props.cutomClass}`}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
      />
    </>
  );
};

export default component;
