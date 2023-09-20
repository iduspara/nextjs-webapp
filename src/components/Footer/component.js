import React from 'react';
import Image from '@partials/Image/component';
import Button from '@partials/Button/component';
import AppStoreButton from '@assets/images/app-store.svg';
import PlayStoreButton from '@assets/images/play-store.svg';

const Component = () => (
  <footer
    className="main-footer theme-ci font-size-m background-color-slate color-white"
    id="pageFooter">
    <div className="container padding-top-m padding-bottom-m sm:padding-top-xl sm:padding-bottom-xl md:padding-top-xxxl md:padding-bottom-xxxl">
      <div className="row">
        <div className="col-md-7">
          <div className="margin-bottom-xxl md:margin-bottom-xl">
            <Button
              href="https://www.finanztip.de/unterstuetzung"
              type="support"
              customClass="small">
              Unterstütze uns
            </Button>
          </div>
          <div className="margin-bottom-xxl md:margin-bottom-xl">
            <div className="nl-signup-box-footer">
              <div className="react-newsletter-footer"></div>
            </div>
          </div>
          <div className="margin-bottom-xxl md:no-margin-bottom">
            <h4 className="font-size-xxs font-normal leading-text-tight padding-bottom-m no-margin">
              Unsere App
            </h4>
            <div className="app-buttons">
              <a
                href="https://apps.apple.com/de/app/finanztip/id1607874770"
                target="_blank"
                rel="noreferrer">
                <Image src={AppStoreButton.src} alt="Apple Store Button" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=de.finanztip.mobileapp"
                target="_blank"
                rel="noreferrer">
                <Image src={PlayStoreButton.src} alt="Google Store Button" />
              </a>
            </div>
          </div>
        </div>
        <div className="menu col-md-offset-1 col-md-4">
          <div className="trustpilot-wrapper">
            {/* <!-- TrustBox widget - Micro Star --> */}
            <div
              className="trustpilot-widget"
              data-locale="de-DE"
              data-template-id="5419b732fbfb950b10de65e5"
              data-businessunit-id="5dbdb820cb194c00012e6af1"
              data-style-height="24px"
              data-style-width="100%"
              data-theme="dark">
              <a
                href="https://de.trustpilot.com/review/finanztip.de"
                target="_blank"
                rel="noopener noreferrer">
                Trustpilot
              </a>
            </div>
          </div>
          {/* <!-- End TrustBox widget --> */}
          <ul>
            <li>
              <a href="/ueber-uns/" title="Über uns">
                <span>Über uns</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.finanztip-stiftung.de"
                title="Finanztip Stiftung"
                target="_blank"
                rel="noreferrer">
                <span>Finanztip Stiftung</span>
              </a>
            </li>
            <li>
              <a href="/ueber-uns-team/" title="Das Team">
                <span>Das Team</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.finanztip.schule"
                title="Finanztip Schule"
                target="_blank"
                rel="noreferrer">
                <span>Finanztip Schule</span>
              </a>
            </li>
            <li>
              <a href="/ueber-uns/auszeichnungen/" title="Auszeichnungen">
                <span>Auszeichnungen</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.finanztip.de/blog/"
                title="Finanztip News"
                target="_blank"
                rel="noreferrer">
                <span>Finanztip News</span>
              </a>
            </li>
            <li>
              <a href="/presse/medienaufftritte/" title="Medienauftritte">
                <span>Medienauftritte</span>
              </a>
            </li>
            <li>
              <a
                href="https://community.finanztip.de/"
                title="Finanztip Forum"
                target="_blank"
                rel="noreferrer">
                <span>Finanztip Forum</span>
              </a>
            </li>
            <li>
              <a href="/presse/" title="Presse">
                <span>Presse</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.finanztip.de/erfahrungen/"
                title="Finanztip Erfahrungen"
                target="_blank"
                rel="noreferrer">
                <span>Finanztip Erfahrungen</span>
              </a>
            </li>
            <li>
              <a href="/jobs/" title="Karriere">
                <span>Karriere</span>
              </a>
            </li>
            <li>
              <a href="/app/" title="Finanztip App">
                <span>Finanztip App</span>
              </a>
            </li>
            <li>
              <a href="/datenschutz/" title="Datenschutz">
                <span>Datenschutz</span>
              </a>
            </li>
            <li>
              <a href="/podcast/" title="Finanztip Podcast">
                <span>Finanztip Podcast</span>
              </a>
            </li>
            <li>
              <a href="/kontakt/" title="Kontakt">
                <span>Kontakt</span>
              </a>
            </li>
            <li>
              <a href="/deals/" title="Finanztip Deals">
                <span>Finanztip Deals</span>
              </a>
            </li>
            <li>
              <a href="/impressum/" title="Impressum">
                <span>Impressum</span>
              </a>
            </li>
            <li>
              <a href="/sitemap/" title="Sitemap">
                <span>Sitemap</span>
              </a>
            </li>
          </ul>
          <div className="social-icons">
            <div className="ftdefaultcontentelement">
              <div className="frame frame-default frame-type-html frame-layout-0">
                <a
                  href="http://www.facebook.com/finanztip"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-facebook no-filter"></span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC-muQylmRx61Mt6U1oDSEVA"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-youtube no-filter"></span>
                </a>
                <a
                  href="http://www.xing.com/news/pages/finanztip-496"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-xing no-filter"></span>
                </a>
                <a
                  href="http://www.twitter.com/Finanztip"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-twitter no-filter"></span>
                </a>
                <a
                  href="https://www.instagram.com/finanztip/?hl=de"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-instagram no-filter"></span>
                </a>
                <a
                  href="https://de.linkedin.com/company/finanztip"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-linkedin no-filter"></span>
                </a>
                <a
                  href="https://www.tiktok.com/@finanztip?lang=de-DE"
                  target="_blank"
                  rel="noreferrer">
                  <span className="icon-tiktok no-filter"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Component;
