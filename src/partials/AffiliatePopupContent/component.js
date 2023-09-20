import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Button from '@partials/Button/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const recommendedProducts = props.products.filter(
    (product) => product.recommended === true
  );
  const nonRecommendedProducts = props.products.filter(
    (product) => product.recommended === false
  );

  const productHtml = (product, index) => (
    <div key={index} className="affiliate-product">
      <p className="affiliate-product-name">{product.productType}</p>
      <div className="affiliate-product-links">
        <a className="guide-link" href={product.guideLink}>
          {props.guideLabel}
        </a>
        {product.affiliateLink ? (
          <Button
            small={1}
            href={product.affiliateLink}
            dataTrack="experience-portal-affiliate-popup">
            {props.affiliateLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="affiliate-popup-content">
      <div className="upper-content">
        <p className="headline">{props.title}</p>
        <p className="text">{props.text}</p>
        <div className="affiliate-products">
          {recommendedProducts.map(productHtml)}
        </div>
      </div>
      <div className="result-item">
        <p className="more-details" data-text-active={props.moreProductsLabel}>
          <span className="more-details-text headline">
            {props.moreProductsLabel}
          </span>
          <span className="more-details-icon icon-chevron-down color-slate"></span>
        </p>
        <div className="result-item-details hidden">
          {nonRecommendedProducts.map(productHtml)}
        </div>
      </div>
      <div className="lower-content">{ReactHtmlParser(props.asteriskText)}</div>
    </div>
  );
};
export default component;
