import React from 'react';

const component = (props) => (
  <div data-track="shortcut" id="content-108674">
    <div
      id="c108674"
      className="frame frame-default frame-type-shortcut frame-layout-0">
      <div
        data-track="text"
        className="ftdefaultcontentelement"
        id="content-108589">
        <div
          id="c108589"
          className="frame frame-default frame-type-text frame-layout-0 frame-space-before-extra-small">
          {props.headline}
          <div className="container">
            <div className="row justify-content-sm-center">
              <div
                className="col-sm-10 col-md-8"
                dangerouslySetInnerHTML={{
                  __html: props.bodytext,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default component;
