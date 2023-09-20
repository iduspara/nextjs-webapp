import React from 'react';
import PropTypes from 'prop-types';
import Button from '@partials/Button/component';

const Component = (props) => (
  <div className={props.show ? 'filter-error' : 'filter-error hidden'}>
    <p>
      {props.title
        ? props.title
        : 'Keine Anbieterbewertungen mit diesen Filtereinstellungen'}
    </p>
    <Button
      type="primary"
      small={1}
      customClass="zero-results-reset"
      onClick={props.onZeroResultsClick}>
      {props.buttonLabel ? props.buttonLabel : 'Filter zurücksetzen'}
    </Button>
  </div>
);

Component.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  onZeroResultsClick: PropTypes.func,
};

export default Component;
