import React from 'react';
import AffiliatePopupContent from '@partials/AffiliatePopupContent/component';
import Overlay from '@shared/Overlay/component';

const component = (props) => {
  const showClass = props.show ? 'active' : '';

  return (
    <Overlay className={`affiliate-popup ${showClass}`} sidebar="true">
      <AffiliatePopupContent {...props} />
    </Overlay>
  );
};
export default component;
