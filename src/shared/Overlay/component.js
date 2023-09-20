import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import fadeBoundaries from '@assets/scripts/helpers/fadeBoundaries';
import {
  disableScroll,
  clearScrollLocks,
} from '@assets/scripts/helpers/bodyScrollLock';

const Component = (props) => {
  const [isActive, setIsActive] = useState(false);
  const overlay = useRef(null);
  const content = useRef(null);
  const closeOverlay = () => {
    setIsActive(false);
    if (props.closeOverlayCallback) {
      props.closeOverlayCallback();
    }
  };

  useEffect(() => {
    if (props.isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props.isActive]);

  useEffect(() => {
    if (isActive) {
      overlay.current.classList.add('active');
      disableScroll(content.current);
    } else {
      overlay.current.classList.remove('active');
      clearScrollLocks();
    }
  }, [isActive]);

  useEffect(() => {
    fadeBoundaries(content.current, true);

    content.current.addEventListener('scroll', () => {
      fadeBoundaries(content.current, true);
    });
  }, [content]);

  if (props.sidebar) {
    return (
      <div
        id={props.id}
        className={`overlay sidebar ${props.className}`}
        ref={overlay}>
        <div className="overlay-close" onClick={closeOverlay}></div>
        <div className="modal-right">
          <div className="modal-close icon-close" onClick={closeOverlay}></div>
          <div className="modal-header">
            <p className="h3">{props.headline}</p>
          </div>
          <div className="content" ref={content}>
            {props.children}
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    );
  }

  return (
    <div id={props.id} className={`overlay ${props.className}`} ref={overlay}>
      <div className="overlay-close" onClick={closeOverlay}></div>
      <div className="modal">
        <div className="modal-close icon-close" onClick={closeOverlay}></div>
        <div className="box">
          <div className="modal-header js-scroll">
            <p className="h3">{props.headline}</p>
          </div>
          <div className="content" ref={content}>
            {props.children}
          </div>
          <div className="modal-footer js-scroll"></div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  isActive: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  sidebar: PropTypes.bool,
  headline: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  closeOverlayCallback: PropTypes.func,
};

export default Component;
