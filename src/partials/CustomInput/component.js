import React from 'react';
import ReactHtmlParser from 'react-html-parser';
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
  const labelInside = props.labelInside ? (
    <label htmlFor={props.id}>{ReactHtmlParser(props.inside)}</label>
  ) : null;
  const spacing = props.spacing ? ` margin-bottom-${props.spacing}` : '';
  const error = props.error ? (
    <div className={`error-message ${props.errorClass}`}>{props.error}</div>
  ) : null;
  const customError = props.customError ? (
    <div className="hidden custom-error">{props.customError}</div>
  ) : null;
  const textaddon = props.textaddon ? (
    <div className="text-addon">{ReactHtmlParser(props.textaddon)}</div>
  ) : null;

  return (
    <>
      {label}
      <div className={`custom-input ${spacing}`}>
        <div className="input-outline">
          <div className="input-wrapper">
            <input
              autoComplete={props.autocomplete}
              className={props.class}
              id={props.id}
              max={props.max}
              min={props.min}
              name={props.name}
              placeholder={props.placeholder}
              step={props.step}
              type={props.type}
              defaultValue={props.value}
              pattern={props.pattern}
              disabled={props.disabled}
              required={props.required}
            />
            {labelInside}
          </div>
        </div>
        {error}
        {customError}
        {textaddon}
      </div>
    </>
  );
};

export default component;
