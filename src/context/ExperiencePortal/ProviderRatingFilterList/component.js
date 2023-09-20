import React from 'react';
import ProviderRatingReviewList from '@components/ProviderRatingReviewList/component';
import ProviderDetailsHeader from '@components/ProviderDetailsHeader/component';
import ProviderCircleRating from '@components/ProviderCircleRating/component';
import FilterError from '@partials/FilterError/component';
import Spinner from '@partials/Spinner/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const showAllButton =
    props.reviews.length > props.numberToShow ? (
      <div className="flex-center">
        <button className="show-all-button secondary">
          Mehr Bewertungen anzeigen
          <Spinner className="hidden" size="s" />
        </button>
      </div>
    ) : null;

  return (
    <section className="ft-experience-portal">
      <div className="provider-rating-filter-list">
        <ProviderCircleRating donuts={props.donuts} />
        <div className="experience-portal-grid-s margin-top-xxxl">
          <h2 className="margin-bottom-l">Erfahrungsberichte (370)</h2>
          <ProviderDetailsHeader
            ratings={props.ratings}
            products={props.products}
            leftLabel={props.leftLabel}
            rightLabel={props.rightLabel}
            rightId={props.rightId}
            leftId={props.leftId}
            rightName={props.rightName}
            leftName={props.leftName}
          />
          <div className="filter-results"></div>
          <div className="padding-top-xl margin-top-l border-top provider-rating-wrapper">
            <div className="spinner-wrapper">
              <Spinner size="l" />
            </div>
            <ProviderRatingReviewList
              reviews={props.reviews}
              numberToShow={props.numberToShow}
              dataRating={props.reviews.dataRating}
              dataProduct={props.reviews.dataProduct}
            />
            {showAllButton}
            <FilterError />
          </div>
        </div>
      </div>
    </section>
  );
};

export default component;
