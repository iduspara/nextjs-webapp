import React from 'react';
import Button from '@partials/Button/component';

const component = (props) => (
  <div className="sticky-cta">
    <div className="cta-flex">
      <div className="cta-image">
        <img
          src="https://www.finanztip.de/fileadmin/images/Anbieterlogos/AOK.png"
          alt="aok-logo-image"
        />
      </div>
      <div className="cta-buttons">
        <Button
          customClass="sticky-cta-provider-rating-button"
          type={props.ratingButtonType}
          small={props.ratingButtonSmall}
          href={props.ratingButtonHref}>
          {props.ratingButtonLabel}
        </Button>
        <Button
          customClass="sticky-cta-affiliates-button"
          type={props.providerButtonType}
          small={props.providerButtonSmall}>
          {props.providerButtonLabel}
        </Button>
      </div>
    </div>
  </div>
);

export default component;
