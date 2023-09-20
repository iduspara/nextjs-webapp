import React from 'react';
import Image from 'next/image';

const component = (props) => (
  <div
    data-track="image"
    className="ftdefaultcontentelement"
    id="content-22498">
    <div
      id="c22498"
      className="frame frame-default frame-type-image frame-layout-0">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-sm-10 col-md-8">
            <div className="ce-image ce-left ce-above">
              <div
                className="ce-gallery"
                data-ce-columns="1"
                data-ce-images="1">
                <div className="ce-row">
                  <div className="ce-column">
                    <figure className="image">
                      <Image
                        className="image-embed-item"
                        title={props.title}
                        alt={props.alt}
                        src={props.src}
                        width={props.width}
                        height={props.height}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default component;
