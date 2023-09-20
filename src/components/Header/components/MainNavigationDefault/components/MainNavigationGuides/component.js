import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import fadeBoundaries from '@assets/scripts/helpers/fadeBoundaries';
import Children from './components/Children/component';

const Component = (props) => {
  const guides = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    if (props.isActive) {
      guides.current.classList.add('active');
    } else {
      guides.current.classList.remove('active');
    }
  }, [props.isActive]);

  useEffect(() => {
    fadeBoundaries(content.current, true);

    content.current.addEventListener('scroll', () => {
      fadeBoundaries(content.current, true);
    });
  }, [content]);

  return (
    <div className="main-navigation-guides" ref={guides}>
      <div className="modal-header">
        <a className="guides-back" onClick={props.handleGuidesToggleClick}>
          <span className="icon-chevron-left font-size-l" />
          <span>zurück</span>
        </a>
      </div>
      <div className="content" ref={content}>
        <ul className="main-navigation-links-level-1">
          {props.menuItems.map((menuItem, index) => (
            <li key={menuItem.href} className="main-navigation-section">
              {index > 0 && <hr className="separator" />}
              <a href={menuItem.href} className="navlink">
                {menuItem.label}
              </a>
              {menuItem.children && <Children menuItems={menuItem.children} />}
            </li>
          ))}
        </ul>
      </div>
      <div className="modal-footer"></div>
    </div>
  );
};

Component.propTypes = {
  isActive: PropTypes.bool,
  menuItems: PropTypes.array,
  handleGuidesToggleClick: PropTypes.func,
};

export default Component;
