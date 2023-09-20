import React from 'react';

const component = (props) => (
  <ul className="header-quicklinks font-size-m no-bullets">
    {props.menuItems.map((menuItem) => (
      <li key={menuItem.href} className="header-link">
        <a className="navlink" href={menuItem.href}>
          {menuItem.label}
        </a>
      </li>
    ))}
  </ul>
);

export default component;
