import React from 'react';
import Image from '@partials/Image/component';
import ProductReccomendation from '@partials/ProductRecommendation/component';

const component = (props) => (
  <div className="affiliate-recobox">
    <ProductReccomendation />
    <h4 className="recobox-title margin-bottom-xxs ">{props.title}</h4>
    <p>{props.content}</p>

    <ul className="recobox-list">
      {props.providers.map((provider, index) => (
        <li key={provider.name + index}>
          <div className="logo-holder">
            <a href={`${provider.link}#bewertung`}>
              <Image src={provider.logoImage} alt={provider.name} />
            </a>
          </div>

          <div className="buttons-holder">
            <a className="link-feedback" href={provider.link}>
              {provider.commentsCounter} Erfahrungsberichte
            </a>
            <div className="buttons-affiliate-holder">
              {provider.linkCode && (
                <a
                  className="button small affiliate"
                  href={`/ext/${provider.linkCode}/`}>
                  Zum Anbieter
                </a>
              )}

              {!provider.linkCode && 'Nur beim Anbieter abschließbar'}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
export default component;
