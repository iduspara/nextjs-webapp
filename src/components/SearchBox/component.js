import React from 'react';
import SearchForm from '@shared/SearchForm/component';
import FinanztipGrid from '@shared/FinanztipGrid/component';

const component = (props) => (
  <div className="search-box">
    <FinanztipGrid size="l" className="search-box-container">
      <div className="search-headline">{props.headline}</div>
      <SearchForm searchFieldLabel="Suchbegriff eingeben" />
    </FinanztipGrid>
  </div>
);
export default component;
