import React from 'react';
import Image from 'next/image';

const component = (props) => {
  if (props.asset === undefined) {
    return (
      <div
        data-track="textpic"
        className="ftdefaultcontentelement"
        id="content-105679">
        <div
          id="c105679"
          className="frame frame-default frame-type-textpic frame-layout-0">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-10 col-md-8">
                <div className="ce-textpic ce-center ce-above">
                  <div
                    className="ce-bodytext"
                    dangerouslySetInnerHTML={{ __html: props.bodytext }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.asset.mimetype.startsWith('image')) {
    return (
      <div
        data-track="textpic"
        className="ftdefaultcontentelement"
        id="content-22493">
        <div
          id="c22493"
          className="frame frame-default frame-type-textpic frame-layout-0">
          {props.headline}
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-10 col-md-8">
                <div className="ce-textpic ce-center ce-below">
                  <div
                    className="ce-bodytext"
                    dangerouslySetInnerHTML={{ __html: props.bodytext }}
                  />
                  <div
                    className="ce-gallery"
                    data-ce-columns="1"
                    data-ce-images="1">
                    <div className="ce-outer">
                      <div className="ce-inner">
                        <div className="ce-row">
                          <div className="ce-column">
                            <figure className="image">
                              <Image
                                className="image-embed-item"
                                title={props.asset.title}
                                alt={props.asset.alternative}
                                src={`https://www.finanztip.de/${props.asset.url}`}
                                width={props.asset.width}
                                height={props.asset.height}
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
        </div>
      </div>
    );
  }
  if (props.asset.mimetype.startsWith('video')) {
    return (
      <div
        data-track="textmedia"
        className="ftdefaultcontentelement"
        id="content-105760">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-xs-12 col-sm-10 col-md-8">
              <h4 className="header-contentelement heading-contentelement-4">
                {props.headlineText}
              </h4>
            </div>
          </div>
        </div>
        <div
          id="c105760"
          className="frame frame-default frame-type-textmedia frame-layout-0">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-sm-10 col-md-8">
                <div className="ce-textpic ce-center ce-above">
                  <div
                    className="ce-gallery"
                    data-ce-columns="1"
                    data-ce-images="1">
                    <div className="ce-outer">
                      <div className="ce-inner">
                        <div className="ce-row">
                          <div className="ce-column">
                            <figure className="video">
                              <div className="video-embed">
                                <div className="video-embed-wrapper">
                                  <iframe
                                    src={props.asset.files[0].youtube.original.replace(
                                      'watch',
                                      'embed'
                                    )}
                                    className="video-embed-item"
                                    title={props.headlineText}
                                    allow="fullscreen"></iframe>
                                </div>
                              </div>
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
        </div>
      </div>
    );
  }
  return null;
};
export default component;
