import React from 'react';
import ProductReccomendation from '@partials/ProductRecommendation/component';
import Button from '@partials/Button/component';

const component = (props) => {
  const recommendation = props.isRecommendation ? (
    <ProductReccomendation />
  ) : null;

  return (
    <div className="product">
      <div className="product-row">
        <div className="product-row-first">
          <p className="product-name">{props.name}</p>
          {recommendation}
        </div>
        <div className="product-row-last">
          <Button type="secondary" small={true} href={props.href}>
            Zum Ratgeber
          </Button>
        </div>
      </div>
    </div>
  );
};

export default component;
