import React from 'react';
import Text from '@partials/Text/component';
import Headline from '@partials/Headline/component';

const component = (props) => (
  <div className="experience-portal-header">
    <div className="provider-logo">
      <img alt={props.name} src={props.providerLogoUrl} />
    </div>
    <Headline type="h2">{props.headlineOne}</Headline>
    <Text text={props.text} />
  </div>
);

export default component;
