import React from 'react';
import domready from 'domready';
import Button from '@partials/Button/component';
import Scripts from './scripts';

const component = (props) => (
  // domready(Scripts);

  <>
    <div id={props.twingleId} className="twingle-floating-element">
      <Button customClass="btn-twingle" type={props.btnType}>
        {props.children}
      </Button>
      <button className="btn-chevron-close"></button>
      <div className="twingle-content">
        <div className="twingle-content-message twingle-show-overlay">
          {props.message}
        </div>
        <div className="twingle-content-mask">
          <div className="js-scroll"></div>
          <div className="twingle-content-body">
            <p className="intro-message twingle-show-overlay">
              Fördere die finanzielle Bildung in Deutschland. Mit Deinem Beitrag
              hilfst du, noch mehr Menschen zu erreichen.
            </p>
            {props.content}
          </div>
          <div className="js-scroll"></div>
        </div>
      </div>
    </div>
    <p>{props.testContent}</p>
    <h1>
      <strong className="share-bar">share element</strong>
    </h1>
    <p>{props.testContent}</p>
  </>
);
export default component;
