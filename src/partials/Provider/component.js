import React from 'react';
import Image from '@partials/Image/component';
import IconFinanztip from '@icons/Finanztip/component';
import SmallDonut from '@partials/Charts/SmallDonut/component';
import Button from '@partials/Button/component';

const component = (props) => {
  const recommendation = props.isRecommendation ? (
    <div className="provider-recommendation">
      <IconFinanztip />
      <div>
        <a href={`${props.href}#recom`}>Empfehlung</a>
      </div>
    </div>
  ) : null;

  return (
    <div className="provider" data-search={props.searchTags}>
      <div className="provider-row">
        <div className="provider-row-first">
          <a className="provider-logo" href={`${props.href}#bewertung`}>
            <Image alt={props.name} src={props.logo} />
          </a>
          <div className="provider-infos">
            <div className="provider-numbers">
              <SmallDonut
                positiveAmount={props.positiveAmount}
                negativeAmount={props.negativeAmount}
              />
              <strong>{props.positiveAmount}% positive Erfahrungen</strong>
            </div>
            <div className="text-center">
              <a href={props.href}>{props.commentsAmount} Erfahrungsberichte</a>
            </div>
          </div>
        </div>
        <div className="provider-row-last">
          {recommendation}
          <Button type="secondary" href={`${props.href}#bewertung`}>
            Anbieter bewerten
          </Button>
        </div>
      </div>
    </div>
  );
};

export default component;
