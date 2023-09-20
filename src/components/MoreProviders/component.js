import React from 'react';
import Button from '@partials/Button/component';
import Image from '@partials/Image/component';

const component = (props) => {
  const providerElements = props.providers.map((provider, index) => (
    <a key={index} href={provider.link} className="logo-column">
      <Image src={provider.image} alt={provider.name} />
    </a>
  ));

  return (
    <div className="more-providers">
      <h2 className="text-center">Weitere Anbieter</h2>
      <div className="provider-group-mask">
        <div className="provider-group">
          {providerElements}
          <div className="more-providers-button tablet-desktop">
            <Button
              href={props.shwowAllProvidersLink}
              small={true}
              type="primary">
              {props.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
      <div className="more-providers-button mobile">
        <Button href={props.shwowAllProvidersLink} small={true} type="primary">
          {props.buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default component;
