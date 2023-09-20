import React from 'react';
import ProviderRatingPopupContent from '@partials/ProviderRatingPopupContent/component';
import Overlay from '@shared/Overlay/component';

const component = (props) => {
  const showClass = props.show ? 'active' : '';

  return (
    <Overlay
      className={`provider-rating-popup ${showClass}`}
      headline={props.popupTitle}>
      <ProviderRatingPopupContent {...props} />
    </Overlay>
  );
};
export default component;
