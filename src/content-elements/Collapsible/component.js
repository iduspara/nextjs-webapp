import React from 'react';

const component = (props) => (
  <div data-track="ft_collapsible" id="content-108100">
    <div
      id="c108100"
      className="frame frame-default frame-type-ft_collapsible frame-layout-0">
      <div className="container margin-bottom-m sm:margin-bottom-xl">
        <div className="row justify-content-sm-center">
          <div className="col-sm-10 col-md-8">
            <div className="faq-accordion">
              <div className="accordion-content">
                <div className="accordion-header cursor-pointer flex-space-between">
                  <h4 className="font-size-xs sm:font-size-s leading-ui16 sm:leading-ui18 font-bold h5">
                    {props.headline}
                  </h4>
                  <span className="arrow font-size-l margin-left-s sm:margin-left-m flex-no-shrink icon-chevron-down"></span>
                </div>
                <div
                  className="accordion-body padding-top-m overflow-hidden hidden"
                  style={{
                    transition: 'max-height 200ms ease-out 0s',
                    minHeight: '0px',
                    maxHeight: '0px',
                  }}>
                  <div
                    className="text sm:font-size-s"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                  />
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
