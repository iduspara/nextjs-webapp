import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from '@partials/Image/component';
import SearchForm from '@shared/SearchForm/component';
import IconSearch from '@icons/Search/component';
import HeaderLinkList from '../HeaderLinkList/component';

const Component = (props) => {
  const [search, setSearch] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const burgerRef = useRef(null);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    if (props.noSearch) {
      setSearch(null);
    } else {
      setSearch(
        <SearchForm
          searchFieldLabel="Suchbegriff eingeben"
          isActive={props.isSearchOpen}
        />
      );
    }
  }, [props.noSearch, props.isSearchOpen]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    if (props.noMenuDesktop) {
      burgerRef.current.classList.add('hide-tablet-desktop');
    } else {
      burgerRef.current.classList.remove('hide-tablet-desktop');
    }
  }, [props.noMenuDesktop]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    if (props.isMenuOpen || props.isSearchOpen) {
      burgerRef.current.classList.add('active');
    } else {
      burgerRef.current.classList.remove('active');
    }
  }, [props.isMenuOpen, props.isSearchOpen]);

  return (
    <header className="header-bar">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 flex-space-between flex-center-y">
            <a className="header-logo" href="/">
              <Image src={props.logoSrc} alt="Finanztip" />
            </a>
            <div className="header__right">
              <div className="hide-mobile">
                <HeaderLinkList menuItems={props.linkListItems} />
              </div>

              <div>
                <span className="search-toggle" onClick={props.SearchClick}>
                  <IconSearch />
                </span>
                {search}
              </div>

              <a
                ref={burgerRef}
                className="header-burger"
                onClick={props.burgerNavClick}>
                <span className="burger-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Component.propTypes = {
  logoSrc: PropTypes.string,
  noSearch: PropTypes.bool,
  noMenuDesktop: PropTypes.bool,
  linkListItems: PropTypes.array,
  burgerNavClick: PropTypes.func,
  SearchClick: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  isSearchOpen: PropTypes.bool,
};

export default Component;
