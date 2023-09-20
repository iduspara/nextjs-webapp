import React from 'react';

const component = (props) => (
  <div data-track="text" className="ftdefaultcontentelement" id="content-93961">
    <div
      id="c93961"
      className="frame frame-default frame-type-text frame-layout-0">
      {props.headline}
      <div className="container">
        <div className="row justify-content-sm-center">
          <div
            className="col-sm-10 col-md-8"
            dangerouslySetInnerHTML={{ __html: props.bodytext }}
          />
        </div>
      </div>
    </div>
  </div>
);
export default component;
