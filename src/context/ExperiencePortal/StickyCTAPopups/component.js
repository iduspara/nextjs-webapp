import React from 'react';
import StickyCTA from '@components/StickyCTA/component';
import AffiliatePopup from '@components/AffiliatePopup/component';
import ProviderRatingPopup from '@components/ProviderRatingPopup/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => (
  // domready(Scripts);

  <section className="ft-experience-portal">
    <p>{props.bodyText}</p>
    <div className="sticky-affiliate-popup">
      <StickyCTA {...props.stickyCTA} />
      <AffiliatePopup {...props.affiliatePopup} />
      <ProviderRatingPopup {...props.providerRatingPopup} />
    </div>
  </section>
);
export default component;
