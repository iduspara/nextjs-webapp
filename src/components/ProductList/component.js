import React from 'react';
import Product from '@partials/Product/component';
import Headline from '@partials/Headline/component';

const component = (props) => (
  <div className="product-list">
    <Headline type="h2">Produkte von {props.providerName}</Headline>
    {props.products.map((product, index) => (
      <Product
        key={index}
        name={product.name}
        href={product.href}
        isRecommendation={product.isRecommendation}
      />
    ))}
  </div>
);

export default component;
