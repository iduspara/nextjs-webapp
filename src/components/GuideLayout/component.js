import React from 'react';

const component = (props) => (
  <section className="ft-guide">
    <div className="container guide-intro padding-top-xxxl">
      <div className="row flex flex-start flex-direction-column sm:flex-direction-row lg:flex-center-y">
        <div className="article col-lg-10 col-lg-offset-1">
          <h1 className="font-ui text-center sm:text-left">{props.tagline}</h1>
          <h2 className="font-size-xxl sm:font-size-xxxl md:font-size-xxxxl font-bold margin-bottom-m sm:margin-bottom-xl text-center sm:text-left">
            {props.headline}
          </h2>
          <div className="text-center sm:text-left">
            <div className="flex-center-y margin-bottom-m sm:margin-bottom-xl flex-direction-column sm:flex-direction-row">
              <img
                className="no-margin-right display-block sm:margin-right-m margin-bottom-s sm:no-margin-bottom border-radius-circle lazy"
                src="https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_d3ef0e1e3c.png"
                srcSet="
              https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_8fc51aec19.png  40w,
              https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_d3ef0e1e3c.png  80w,
              https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_cd685d60bb.png  96w,
              https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_988573007a.png 120w,
              https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_1d3971401e.png 160w,
              https://www.finanztip.de/fileadmin/_processed_/d/4/csm_Hendrik_f961829ca1.png 240w
            "
                sizes="(min-width: 80px) 80px, 100vw"
                width="80"
                height="80"
                alt=""
                data-cmp-info="10"
              />
              <div className="font-ui font-size-xxs leading-text-tight">
                <span
                  className="cursor-pointer font-size-xxs font-ui color-slate leading-text-tight"
                  data-js-overlay="modal-popup-expert-overlay">
                  <a
                    href="https://www.finanztip.de/autor/hendrik-buhrs/"
                    target="_blank"
                    rel="noreferrer">
                    Hendrik Buhrs
                  </a>
                </span>
                <br />
                Finanztip-Experte für Bank und Börse
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-lg-center">
        <div className="col-lg-10">
          <div className="border-top padding-bottom-xl padding-top-m">
            <div className="flex-space-between flex-center-y">
              <div className="meta-info leading-text-tight font-size-xxs color-grey font-ui flex flex-direction-column lg:flex-direction-row lg:flex-center-y">
                <span className="flex-center-y">
                  <span className="icon-timestamp color-grey font-size-xs margin-right-xxs"></span>
                  Aktualisiert am 07. März 2023
                </span>
                <span
                  className="react-page-counter flex-center-y"
                  id="react-page-counter-0">
                  <span className="icon-visited color-grey font-size-xs margin-right-xxs"></span>
                  621.904 mal angesehen
                </span>
                <span
                  className="react-article-rating-percentage flex-center-y"
                  id="react-article-rating-percentage-0">
                  <span className="icon-helped color-grey font-size-xs margin-right-xxs"></span>
                  94% fanden diesen Ratgeber hilfreich
                </span>
              </div>
              <div className="meta-share flex-no-shrink leading-none">
                <span
                  className="overlay-trigger icon-share font-size-l cursor-pointer"
                  data-js-overlay="modal-popup-meta-share-overlay"></span>
                <div
                  className="overlay"
                  id="modal-popup-meta-share-overlay"
                  data-js-overlay="modal-popup-meta-share-overlay">
                  <span className="overlay-close"></span>
                  <div className="modal small">
                    <span className="modal-close icon icon-close"></span>
                    <div className="box">
                      <div className="modal-header">
                        <p className="overlay-heading">Teilen</p>
                      </div>
                      <div className="content">
                        <div className="meta-share-content leading-text-tight font-ui">
                          <a
                            className="meta-share-item flex-center-y margin-bottom-m no-border-bottom"
                            data-js-overlay="modal-popup-meta-share-overlay"
                            href="https://www.facebook.com/sharer.php?u=https://www.finanztip.de/aktien/"
                            target="_blank"
                            rel="noreferrer">
                            <span className="icon-facebook color-indigo font-size-l"></span>
                            Auf Facebook teilen
                          </a>
                          <a
                            className="meta-share-item flex-center-y margin-bottom-m no-border-bottom"
                            data-js-overlay="modal-popup-meta-share-overlay"
                            href="https://twitter.com/intent/tweet?url=https://www.finanztip.de/aktien/&amp;text=So funktionieren Aktien"
                            target="_blank"
                            rel="noreferrer">
                            <span className="icon-twitter color-indigo font-size-l"></span>
                            Auf Twitter teilen
                          </a>
                          <a
                            className="meta-share-item flex-center-y margin-bottom-m no-border-bottom"
                            data-js-overlay="modal-popup-meta-share-overlay"
                            href="mailto:?subject=Aktien-Tipps%20f%C3%BCr%20Anf%C3%A4nger%3A%20Was%20sind%20Aktien%3F&amp;body=Aktien für Anfänger%0D%0ASo funktionieren Aktien%0D%0A%0D%0AHier geht´s zum vollständigen Ratgeber%0D%0Ahttps://www.finanztip.de/aktien/">
                            <span className="icon-e-mail color-indigo font-size-l"></span>
                            Per E-Mail teilen
                          </a>
                          <a
                            className="meta-share-item flex-center-y margin-bottom-m no-border-bottom"
                            data-js-overlay="modal-popup-meta-share-overlay"
                            href="https://api.whatsapp.com/send?text=So funktionieren Aktien%0D%0AAktien für Anfänger%0D%0A%0D%0AHier geht´s zum vollständigen Ratgeber%0D%0Ahttps://www.finanztip.de/aktien/"
                            target="_blank"
                            rel="noreferrer">
                            <span className="icon-whatsapp color-indigo font-size-l"></span>
                            Mit Whatsapp teilen
                          </a>
                          <div
                            className="meta-share-item flex-center-y cursor-pointer no-border-bottom overlay-print"
                            data-js-overlay="modal-popup-meta-share-overlay">
                            <span className="icon-print color-indigo font-size-l"></span>
                            Drucken
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer no-padding"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ft-guide-content">{props.children}</div>
  </section>
);
export default component;
