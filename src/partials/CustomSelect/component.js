/* eslint-disable no-use-before-define */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import InputLabel from '@partials/InputLabel/component';

export const toggleDropdown = (selectedDiv, optionsDiv, wrapper, state) => {
  switch (state) {
    case 'open':
      wrapper.classList.add('active');
      break;
    case 'close':
      wrapper.classList.remove('active');
      break;
    default:
      wrapper.classList.toggle('active');
      break;
  }

  // eslint-disable-next-line no-param-reassign
  optionsDiv.scrollTop = 0;

  // Currently selected option via arrows
  let focusedOption = 0;

  // In case of datalist, get only visible options and change them whenever there's new input
  if (selectedDiv.parentElement.classList.contains('custom-datalist')) {
    selectedDiv.querySelector('input').addEventListener('input', () => {
      optionsDiv.querySelectorAll('.option').forEach((option) => {
        option.classList.remove('highlighted');
      });

      focusedOption = 0;
    });
  }

  // Remove all previously set classes before opening dropdown
  optionsDiv.querySelectorAll('.option').forEach((option) => {
    option.classList.remove('highlighted');
  });

  const detectBlur = (e) => {
    // Detect if option was selected
    switch (true) {
      // Custom Select option was clicked or active select was clicked
      case e.target.outerHTML.startsWith('<div class="options'):
      case e.target.outerHTML.startsWith('<div class="option'):
      case e.target === selectedDiv:
        break;
      default:
        toggleDropdown(selectedDiv, optionsDiv, wrapper, 'close');

        // Remove listener after click
        removeEventListeners();
        break;
    }
  };

  const detectKeydown = (e) => {
    switch (e.code) {
      case 'Escape':
      case 'Enter':
      case 'ArrowUp':
      case 'ArrowDown':
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const detectKeypress = (e) => {
    e.preventDefault();

    // Variables for key input navigation in dropdowns
    const allOptions = selectedDiv.parentElement.classList.contains(
      'custom-datalist'
    )
      ? optionsDiv.querySelectorAll('.option.visible')
      : optionsDiv.querySelectorAll('.option');

    switch (e.code) {
      case 'Escape':
        // Close dropdown
        toggleDropdown(selectedDiv, optionsDiv, wrapper, 'close');

        // Remove listener after click
        removeEventListeners();
        break;
      case 'Enter':
        // Select current highlighted
        allOptions[focusedOption].click();

        // Remove listener after click
        removeEventListeners();
        break;
      case 'ArrowUp':
        // Highlight previous option
        allOptions[focusedOption].classList.remove('highlighted');
        if (focusedOption === 0) {
          focusedOption = allOptions.length - 1;
        } else {
          focusedOption -= 1;
        }
        allOptions[focusedOption].classList.add('highlighted');
        allOptions[focusedOption].scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
        });
        break;
      case 'ArrowDown':
        // Highlight next option
        allOptions[focusedOption].classList.remove('highlighted');
        if (focusedOption === allOptions.length - 1) {
          focusedOption = 0;
        } else {
          focusedOption += 1;
        }
        allOptions[focusedOption].classList.add('highlighted');
        allOptions[focusedOption].scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
        });
        break;
      default:
        break;
    }
  };

  const removeEventListeners = () => {
    window.removeEventListener('mousedown', detectBlur, false);
    window.removeEventListener('keydown', detectKeydown, false);
    window.removeEventListener('keyup', detectKeypress, false);
  };

  if (wrapper.classList.contains('active')) {
    // Check for blur of dropdown
    window.addEventListener('mousedown', detectBlur, false);

    // Disable default arrow movement
    window.addEventListener('keydown', detectKeydown, false);

    // Check for key presses
    window.addEventListener('keyup', detectKeypress, false);
  }
};

const Component = (props) => {
  const [selectedValue, setSelectedValue] = useState(
    props.placeholder ? props.placeholder : props.options[0].label
  );
  const selectedDiv = useRef(null);
  const optionsDiv = useRef(null);
  const customSelectWrapper = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (props.value !== null) {
      props.options.forEach((option) => {
        if (option.value === props.value) {
          setSelectedValue(option.label);
        }
      });
      selectRef.current.value = props.value;
    }
  }, [props.value, props.options]);

  const handleSelectToggle = () => {
    if (!props.disabled) {
      toggleDropdown(
        selectedDiv.current,
        optionsDiv.current,
        customSelectWrapper.current
      );
    }
  };

  const checkIfSelectIsEmpty = () => {
    const options = selectRef.current.querySelectorAll('option');

    if (selectRef.current.value === options[0].innerHTML) {
      selectRef.current.parentElement.classList.remove('filled');
    } else {
      selectRef.current.parentElement.classList.add('filled');
    }
  };

  const selectOption = (event) => {
    event.preventDefault();

    // When an item is clicked, update the original select box and the selected item
    props.options.forEach((option, i) => {
      if (option.label === event.target.innerHTML) {
        selectRef.current.selectedIndex = i;
        setSelectedValue(event.target.innerHTML);

        optionsDiv.current
          .querySelectorAll('.active')
          .forEach((selected) => selected.classList.remove('active'));
        event.target.classList.add('active');
      }
    });

    // Trigger change event on select and toggle dropdown
    const changeEvent = new Event('change');
    selectRef.current.dispatchEvent(changeEvent);
    props.onChange(changeEvent);

    toggleDropdown(
      selectedDiv.current,
      optionsDiv.current,
      customSelectWrapper.current,
      'close'
    );
    checkIfSelectIsEmpty();
  };

  const placeholder = props.placeholder ? (
    <option className="disabled">{props.placeholder}</option>
  ) : null;
  const label = props.label ? (
    <div className="margin-bottom-s">
      <InputLabel
        tooltip={props.tooltip}
        tooltipIconSize={props.tooltipIconSize}
        id={props.name}>
        {props.label}
      </InputLabel>
    </div>
  ) : null;
  const error = props.error ? (
    <div className={`error-message ${props.errorClass}`}>{props.error}</div>
  ) : null;
  const textaddon = props.textaddon ? (
    <div className="text-addon">{ReactHtmlParser(props.textaddon)}</div>
  ) : null;

  return (
    <>
      {label}
      <div className="custom-select" tabIndex="0">
        <div className="input-wrapper" ref={customSelectWrapper}>
          <select
            ref={selectRef}
            className={props.class}
            id={props.id}
            name={props.name}
            required={props.required}
            disabled={props.disabled}
            defaultValue={props.value ? props.value : props.placeholder}
            data-placeholder={props.placeholder}>
            {placeholder}
            {props.options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                defaultValue={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div
            className="selected"
            onClick={handleSelectToggle}
            ref={selectedDiv}>
            {selectedValue}
          </div>
          <hr className="separator-dropdown" />
          <div className="options" ref={optionsDiv}>
            {props.options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  props.value === option.value ? 'active' : ''
                }`}
                data-value={option.value}
                disabled={option.disabled}
                onClick={!option.disabled && selectOption}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
        {error}
        {textaddon}
      </div>
    </>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipIconSize: PropTypes.string,
  class: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
  errorClass: PropTypes.string,
  textaddon: PropTypes.string,
  onChange: PropTypes.func,
};

export default Component;
