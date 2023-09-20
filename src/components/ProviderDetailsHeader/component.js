import React from 'react';
import CustomSelect from '@partials/CustomSelect/component';

const component = (props) => (
  <div className="provider-details-header">
    <div>
      <CustomSelect
        options={props.products}
        label={props.rightLabel}
        class="product-filter"
      />
    </div>
    <div>
      <CustomSelect
        options={props.ratings}
        label={props.leftLabel}
        class="rating-filter"
      />
    </div>
  </div>
);
export default component;
