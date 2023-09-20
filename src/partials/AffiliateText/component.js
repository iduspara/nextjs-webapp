import React from 'react';
import FinanztipGrid from '@shared/FinanztipGrid/component';

const component = (props) => (
  <div className={`affiliate-text ${props.className}`}>
    <FinanztipGrid size="s">
      <h3>{props.headline}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.affiliateText }} />
    </FinanztipGrid>
  </div>
);

export default component;
