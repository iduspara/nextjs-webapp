import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchField from '@partials/SearchField/component';

const Component = (props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchForm = useRef(null);

  useEffect(() => {
    if (props.isActive) {
      searchForm.current.classList.add('animation-fade-in');

      searchForm.current.addEventListener(
        'animationend',
        () => {
          searchForm.current.classList.remove('animation-fade-in');
          searchForm.current.classList.add('active');
          setIsInputFocused(true);
        },
        { once: true }
      );
    } else {
      searchForm.current.classList.remove('active');
      searchForm.current.classList.add('animation-fade-out');
      searchForm.current.addEventListener(
        'animationend',
        () => {
          searchForm.current.classList.remove('animation-fade-out');
        },
        { once: true }
      );
      setIsInputFocused(false);
    }
  }, [props.isActive]);

  return (
    <div className="search-form">
      <div className="search" ref={searchForm}>
        <form action="/suchergebnisse" method="get">
          <SearchField
            placeholder={props.searchFieldLabel}
            withButton={true}
            buttonLabel="Suchen"
            focus={isInputFocused}
          />
        </form>
      </div>
    </div>
  );
};

Component.propTypes = {
  searchFieldLabel: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Component;
