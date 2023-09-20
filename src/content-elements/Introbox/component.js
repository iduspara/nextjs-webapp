import React from 'react';

const component = (props) => (
  <div>
    <div data-track="ft_introbox" id="content-81737">
      <div
        id="c81737"
        className="frame frame-default frame-type-ft_introbox frame-layout-0">
        <div className="intro-box font-ui font-size-xs sm:font-size-s leading-text-tight">
          <div className="container padding-top-xl padding-bottom-xxxl">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <header>
                  <p className="h3 flex-center-y margin-bottom-xl no-margin-top font-size-m sm:font-size-l">
                    <span className="icon-backhand-pointing-up no-filter margin-right-s sm:margin-right-m font-size-l"></span>
                    {props.upHeadline}
                  </p>
                </header>
                <section
                  className="factbox no-margin-last-child"
                  dangerouslySetInnerHTML={{
                    __html: props.upContent,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="background-color-mint">
            <div className="container padding-top-xxxl padding-bottom-xxxl">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                  <header>
                    <p className="h3 flex-center-y margin-bottom-xl no-margin-top font-size-m sm:font-size-l">
                      <span className="icon-backhand-pointing-right no-filter margin-right-s sm:margin-right-m font-size-l"></span>
                      {props.downHeadline}
                    </p>
                  </header>
                  <section
                    className="advicebox no-margin-last-child"
                    dangerouslySetInnerHTML={{
                      __html: props.downContent,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="affiliate-disclosure-placeholder" data-nosnippet="">
      <div
        className="affiliate-disclosure-container"
        data-track="affiliate-disclosure">
        <div className="ft-affiliate-disclosure" id="affiliateDisclosureText">
          <div
            data-track="text"
            className="ftdefaultcontentelement"
            id="content-101015">
            <div
              id="c101015"
              className="frame frame-default frame-type-text frame-layout-0">
              <div className="container">
                <div className="row justify-content-sm-center">
                  <div className="col-sm-10 col-md-8">
                    <div className="content-box">
                      <p>
                        Klickst Du auf eine Emp­feh­lung mit *, unterstützt das
                        unsere Arbeit. Finanztip bekommt dann eine Vergütung.
                        Emp­feh­lungen geben wir immer nur redaktionell
                        unabhängig und nach strengen Finanztip-Kriterien.
                        <a
                          href="/ueber-uns-wie-wir-uns-finanzieren/"
                          target="_blank">
                          Mehr Infos
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      id="page-content-links"
      className="section-nav container padding-top-xxxl margin-bottom-xl sm:margin-bottom-xxxl font-ui">
      <div className="row justify-content-sm-center flex-wrap">
        <div className="col-sm-10 col-md-8">
          <p className="h3 flex-center-y font-size-m sm:font-size-l margin-bottom-xl">
            <span className="icon-open-book no-filter margin-right-s sm:margin-right-m font-size-l"></span>
            Inhalt
          </p>
          <ol
            id="numbered-sections-headlines"
            className="section-nav margin-bottom-xxxl">
            <li className="font-size-xs sm:font-size-s leading-text-tight">
              <a title="Was sind Aktien?" href="#c93961">
                Was sind Aktien?
              </a>
            </li>
            <li className="font-size-xs sm:font-size-s leading-text-tight">
              <a
                title="Die wichtigsten Begriffe zu Aktien erklärt"
                href="#c109461">
                Die wichtigsten Begriffe zu Aktien erklärt
              </a>
            </li>
            <li className="font-size-xs sm:font-size-s leading-text-tight">
              <a title="Warum brauchst Du Aktien?" href="#c22493">
                Warum brauchst Du Aktien?
              </a>
            </li>
            <li className="font-size-xs sm:font-size-s leading-text-tight">
              <a title="Welche Risiken haben Aktien?" href="#c22496">
                Welche Risiken haben Aktien?
              </a>
            </li>
            <li className="font-size-xs sm:font-size-s leading-text-tight">
              <a title="Was ist die beste Aktie?" href="#c22497">
                Was ist die beste Aktie?
              </a>
            </li>
            <li className="font-size-xs sm:font-size-s leading-text-tight">
              <a title="Was ist ein Aktienindex?" href="#c22501">
                Was ist ein Aktienindex?
              </a>
            </li>
          </ol>
        </div>
        <div className="col-xs-12 col-md-10">
          <div className="border-bottom"></div>
        </div>
      </div>
    </section>
  </div>
);
export default component;
