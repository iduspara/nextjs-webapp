import React from 'react';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const customClasses = props.className ? props.className : '';
  const inputType = props.type === 'checkbox' ? 'checkbox' : 'radio';
  const bulletClass = props.type === 'bullet' ? 'button-icon' : '';

  return (
    <div className={`custom-checkbox-radio ${customClasses}`}>
      <input
        autoComplete="off"
        id={props.id}
        name={props.name}
        type={inputType}
        value={props.value}
        defaultChecked={props.checked}
        required={props.required}
        disabled={props.disabled}
        className={bulletClass}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default component;
