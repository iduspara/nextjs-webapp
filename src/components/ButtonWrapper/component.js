import React from 'react';
import Button from '@partials/Button/component';

const component = (props) => (
  <div className="button-wrapper">
    <Button customClass={props.customClass} type={props.buttonType}>
      {props.buttonLabel}
    </Button>
  </div>
);

export default component;
