'use client';

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExperiencePortalHeader from '@components/ExperiencePortalHeader/component';
import ProviderList from '@components/ProviderList/component';
import FilterError from '@partials/FilterError/component';

const Component = (props) => {
  const [isMounted, setMounted] = useState(false);
  const [currentProviders, setCurrentProviders] = useState(props.providers);
  const [filters, setFilters] = useState({
    input: '',
    select: '',
  });
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (isMounted) {
      if (window.location.hash !== '') {
        const targetFilter = decodeURI(window.location.hash).slice(1);
        setFilters({ input: '', select: targetFilter });
      }
    } else {
      setMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      const newProvidersList = [];

      props.providers.forEach((provider) => {
        const searchTags = provider.searchTags.toLocaleLowerCase();
        if (
          searchTags.includes(filters.input.toLocaleLowerCase()) &&
          searchTags.includes(filters.select.toLocaleLowerCase())
        ) {
          newProvidersList.push(provider);
        }
      });
      setCurrentProviders(newProvidersList);
      setShowError(newProvidersList.length === 0);
    }
  }, [filters, props.providers]);

  const handleFilter = (event) => {
    if (event.target.tagName === 'SELECT') {
      setFilters({ input: filters.input, select: event.target.value });
    } else if (event.target.tagName === 'INPUT') {
      setFilters({ input: event.target.value, select: filters.select });
    }
  };

  const handleZeroResultsClick = () => {
    setFilters({ input: '', select: '' });
  };

  return (
    <div className="header-provider-list">
      <ExperiencePortalHeader
        headlineOne={props.headlineOne}
        headlineTwo={props.headlineTwo}
        text={props.text}
        type={props.type}
        searchFieldLabel={props.searchFieldLabel}
        selectValue={filters.select}
        inputClear={filters.input === ''}
        selectOptions={props.selectOptions}
        rightId={props.rightId}
        onFilterChange={handleFilter}
      />
      <ProviderList providers={currentProviders} />
      <FilterError
        show={showError}
        onZeroResultsClick={handleZeroResultsClick}
      />
    </div>
  );
};

Component.propTypes = {
  headlineOne: PropTypes.string,
  headlineTwo: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  searchFieldLabel: PropTypes.string,
  selectOptions: PropTypes.array,
  selectPlaceholder: PropTypes.string,
  rightId: PropTypes.string,
  providers: PropTypes.array,
};

export default Component;
