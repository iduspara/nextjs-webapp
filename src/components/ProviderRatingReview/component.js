import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const ratingConfig = {
    positive: {
      class: 'good',
      label: 'Positiv',
    },
    neutral: {
      class: 'neutral',
      label: 'Neutral',
    },
    negative: {
      class: 'bad',
      label: 'Negativ',
    },
  };
  const ratingIconClass = ratingConfig[props.rating].class;
  const ratingLabelText = ratingConfig[props.rating].label;
  const ratingLabel = (
    <>
      <span
        className={`icon-rating-${ratingIconClass} font-size-l no-filter`}></span>{' '}
      {ratingLabelText}
    </>
  );

  return (
    <div
      className={`provider-rating-review result-item padding-bottom-xl border-bottom margin-bottom-xl ${props.hidden}`}
      data-rating={props.dataRating}
      data-product={props.dataProduct}>
      <p className="tagline">
        <span className="author-date">
          <strong>{props.author} </strong>
          am {props.date}
        </span>
        <span className={`rating ${props.rating}`}>{ratingLabel}</span>
      </p>
      <p className="title">
        <strong>Produkt:</strong> {props.product}
      </p>
      <div className="text">
        <p>
          {ReactHtmlParser(props.text)}
          <span className="more-details-text-delimiter">…</span>
          {ReactHtmlParser(props.moreText)}
          <span
            className="more-details cursor-pointer"
            data-text-active="Weniger anzeigen">
            <span className="more-details-text">Mehr anzeigen</span>
            <span className="more-details-icon icon-navigation-circle-down color-indigo"></span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default component;
