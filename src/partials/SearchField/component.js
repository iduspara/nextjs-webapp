'use client';

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Component = (props) => {
  const [button, setButton] = useState(null);
  const searchInput = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.withButton) {
      setButton(
        <>
          <div className="search-arrow">
            <button className="button-icon small" type="submit">
              <span className="icon-arrow"></span>
            </button>
          </div>
          <div className="search-text">
            <button className="button primary small" type="submit">
              {props.buttonLabel}
            </button>
          </div>
        </>
      );
    } else {
      setButton(null);
    }
  }, [props.withButton, props.buttonLabel]);

  useEffect(() => {
    if (props.focus) {
      inputRef.current.focus();
    }
  }, [props.focus]);

  useEffect(() => {
    if (props.clear) {
      inputRef.current.value = '';
    }
  }, [props.clear]);

  const handleInput = (event) => {
    if (inputRef.current.value.length === 0) {
      searchInput.current.classList.remove('filled');
    } else {
      searchInput.current.classList.add('filled');
    }

    props.onInput(event);
  };

  const handleInputClear = () => {
    inputRef.current.value = '';
    searchInput.current.classList.remove('filled');
    inputRef.current.focus();
  };

  return (
    <div className="search-field flex-center-y">
      <div className="icon-search font-size-l"></div>
      <div className="search-input margin-left-xxs" ref={searchInput}>
        <input
          ref={inputRef}
          type="text"
          placeholder={props.placeholder}
          autoComplete="off"
          name="q"
          onInput={handleInput}
        />
        <span className="input-clear" onClick={handleInputClear}>
          <span className="icon-close font-size-l"></span>
        </span>
      </div>
      <div className="margin-left-xxs">{button}</div>
    </div>
  );
};

Component.propTypes = {
  buttonLabel: PropTypes.string,
  withButton: PropTypes.bool,
  focus: PropTypes.bool,
  clear: PropTypes.bool,
  placeholder: PropTypes.string,
  onInput: PropTypes.func,
};

export default Component;
