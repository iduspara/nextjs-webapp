import React from 'react';
import ProviderRatingReview from '@components/ProviderRatingReview/component';
import Spinner from '@partials/Spinner/component';

const component = (props) => (
  <div
    className="provider-rating-review-list"
    data-number-to-show={props.numberToShow}
    data-recoboxes=""
    data-environment={process.env.STORYBOOK_ENV}>
    {props.reviews.map((review, index) => {
      const isHidden = index + 1 > props.numberToShow ? 'hidden-leftover' : '';

      return (
        <ProviderRatingReview
          key={index}
          author={review.author}
          text={review.text}
          moreText={review.moreText}
          date={review.date}
          rating={review.rating}
          product={review.product}
          hidden={isHidden}
          dataRating={review.dataRating}
          dataProduct={review.dataProduct}
        />
      );
    })}
  </div>
);

export default component;
