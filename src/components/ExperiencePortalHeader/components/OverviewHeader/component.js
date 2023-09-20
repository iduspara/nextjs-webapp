import React from 'react';
import PropTypes from 'prop-types';
import Text from '@partials/Text/component';
import CustomSelect from '@partials/CustomSelect/component';
import Headline from '@partials/Headline/component';
import SearchField from '@partials/SearchField/component';

const Component = (props) => (
  <div className="experience-portal-header overview-header">
    <div className="experience-portal-grid-l">
      <Headline type="h1" class="tagline">
        {props.headlineOne}
      </Headline>
      <Headline type="h2">{props.headlineTwo}</Headline>
      <Text customClassText="margin-bottom-xl" text={props.text} />
      <div className="inputs">
        <div>
          <SearchField
            placeholder={props.searchFieldLabel}
            onInput={props.onFilterChange}
            clear={props.inputClear}
          />
        </div>
        <CustomSelect
          options={props.selectOptions}
          placeholder={props.selectPlaceholder}
          value={props.selectValue}
          id={props.rightId}
          onChange={props.onFilterChange}
        />
      </div>
    </div>
  </div>
);

Component.propTypes = {
  headlineOne: PropTypes.string,
  headlineTwo: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  searchFieldLabel: PropTypes.string,
  selectOptions: PropTypes.array,
  selectPlaceholder: PropTypes.string,
  rightId: PropTypes.string,
  onFilterChange: PropTypes.func,
  selectValue: PropTypes.string,
  inputClear: PropTypes.bool,
};

export default Component;
