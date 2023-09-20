import React from 'react';
import PropTypes from 'prop-types';
import Provider from '@partials/Provider/component';
import FilterError from '@partials/FilterError/component';

const Component = (props) => (
  <div className="experience-portal-grid-l experience-portal-grid-xs-full experience-portal-grid-sm-full">
    <div className="provider-list">
      {props.providers.map((provider, index) => (
        <Provider
          key={index}
          name={provider.name}
          logo={provider.logo}
          href={provider.href}
          positiveAmount={provider.positiveAmount}
          negativeAmount={provider.negativeAmount}
          commentsAmount={provider.commentsAmount}
          isRecommendation={provider.isRecommendation}
          searchTags={provider.searchTags}
        />
      ))}
      <FilterError />
    </div>
  </div>
);

Component.propTypes = {
  providers: PropTypes.array,
};

export default Component;
