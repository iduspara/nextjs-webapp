import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { slideToggle } from '@assets/scripts/helpers/animations';

const changeToggleText = (element, toggle) => {
  const isInactive =
    element.style.maxHeight === '0px' || element.classList.contains('hidden');

  return isInactive ? toggle.dataset.active : toggle.dataset.initial;
};

const Component = (props) => {
  const nextItems = useRef(null);
  const nextToggle = useRef(null);

  const handleNextToggleClick = (event) => {
    event.preventDefault();

    const level3 = nextItems.current.parentElement;

    nextToggle.current.innerHTML = changeToggleText(
      nextItems.current,
      nextToggle.current
    );

    level3.style.maxHeight = 'none';
    slideToggle(nextItems.current);
    setTimeout(() => {
      level3.style.maxHeight = `${level3.scrollHeight}px`;
    }, 300);
  };

  return (
    <>
      <li className="next-items hidden" ref={nextItems}>
        <ul>
          {props.menuItems.map((child) => (
            <li key={child.href}>
              <a href={child.href} className="navlink">
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <a
          ref={nextToggle}
          className="next-items-toggle"
          data-initial="alle anzeigen"
          data-active="weniger anzeigen"
          onClick={handleNextToggleClick}>
          alle anzeigen
        </a>
      </li>
    </>
  );
};

Component.propTypes = {
  menuItems: PropTypes.array,
};

export default Component;
