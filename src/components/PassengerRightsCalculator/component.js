import React from 'react';
import Text from '@partials/Text/component';
import ButtonWrapper from '@components/ButtonWrapper/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => (
  // domready(Scripts);

  <div className="passenger-rights-calculator ft-calculator">
    {/* container for current question */}
    <div className="passenger-rights-calculator-current-question ft-calculator__form">
      <div className="passenger-rights-calculator-question h5 margin-bottom-xxs"></div>
      <div className="passenger-rights-calculator-answers"></div>
    </div>

    {/* container for result */}
    <div className="passenger-rights-calculator-result-container animation-fade-in result-text-small hidden">
      <div className="passenger-rights-calculator-results"></div>
      <Text text={props.affiliateText} />
      <div className="margin-top-xl">
        <ButtonWrapper
          customClass="result-reset"
          type="primary"
          buttonLabel={props.resetButtonLabel}
        />
      </div>
    </div>
  </div>
);
export default component;
