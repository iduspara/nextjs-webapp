import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NextGrandchildren from './components/NextGrandchildren/component';

const Component = (props) => {
  const [firstItems, setFirstItems] = useState([]);
  const [nextItems, setNextItems] = useState([]);

  useEffect(() => {
    if (props.menuItems) {
      setFirstItems(props.menuItems.slice(0, 4));
      setNextItems(props.menuItems.slice(4));
    }
  }, [props.menuItems]);

  return (
    <ul className="main-navigation-links-level-3 hidden">
      {firstItems.map((child) => (
        <li key={child.href}>
          <a href={child.href} className="navlink">
            {child.label}
          </a>
        </li>
      ))}
      {nextItems.length > 0 && <NextGrandchildren menuItems={nextItems} />}
    </ul>
  );
};

Component.propTypes = {
  menuItems: PropTypes.array,
};

export default Component;
