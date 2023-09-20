import React from 'react';

const component = (props) => (
  <div data-track="ft_podcast" id="content-109465">
    <div
      id="c109465"
      className="frame frame-default frame-type-ft_podcast frame-layout-0">
      <div className="podcast">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-sm-10 col-md-8">
              <div className="podcast_script">
                <iframe
                  data-cmp-ab="2"
                  id="pdg-7f99b5"
                  scrolling="no"
                  src={props.url}
                  style={{
                    border: '0px',
                    overflowY: 'hidden',
                    transition: 'height 100ms linear 0s',
                    minWidth: '100%',
                    height: '261px',
                    maxHeight: '261px',
                  }}
                  width="1px"
                  title="Podcast"
                  aria-label="Podcast"
                  allow="autoplay"
                  className="podigee-podcast-player"
                  data-gtm-yt-inspected-2211381_346="true"
                  data-gtm-yt-inspected-14="true"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default component;
