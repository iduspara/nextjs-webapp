import React from 'react';
import CustomCheckboxRadio from '@partials/CustomCheckboxRadio/component';
import CustomInput from '@partials/CustomInput/component';
import InputLabel from '@partials/InputLabel/component';
import CustomSelect from '@partials/CustomSelect/component';
import CustomTextarea from '@partials/CustomTextarea/component';
import Button from '@partials/Button/component';

const component = (props) => (
  <div className="provider-rating-popup-content">
    <InputLabel>{props.headline}</InputLabel>
    <div className="rating-wrapper">
      {props.ratingOptions.map((option, index) => (
        <div key={index} className="rating">
          <CustomCheckboxRadio
            name="rating"
            type="radio"
            id={option.id}
            label={option.label}
          />
        </div>
      ))}
    </div>
    <div className="margin-top-s">
      <CustomTextarea
        label="Dein Erfahrungsbericht"
        placeholder={props.textareaPlaceholder}
      />
    </div>
    <div>
      <div className="padding-top-xs">
        <CustomSelect
          options={props.productOptions}
          placeholder="Produkt"
          label="Produkt"
          id="product"
          name="product"
        />
      </div>
      <div className="rating-wrapper">
        <div className="input-sizer">
          <CustomCheckboxRadio
            type="checkbox"
            id="provider"
            label="Ich habe den Anbieter 1&1 in den letzten 6 Monaten benutzt oder bin Kunde"
          />
        </div>
        <div className="input-sizer">
          <CustomCheckboxRadio
            type="checkbox"
            id="accept_terms"
            label="Ich habe das Finanztip-Regelwerk zur Bewertung eines Anbieters gelesen und akzeptiere die
            Bedingungen der Finanztip GmbH."
          />
        </div>
      </div>
    </div>
    <div className="rating-wrapper">
      <div className="input-sizer">
        <CustomInput
          label="Name"
          placeholder="seak"
          type="text"
          textAddon="Wird veröffentlicht"
        />
      </div>
      <div className="input-sizer">
        <CustomInput label="E-Mail" textAddon="Wird nicht veröffentlicht" />
      </div>
    </div>
    <div className="margin-top-m margin-bottom-l">
      <Button type="primary">{props.ctaLabel}</Button>
    </div>
  </div>
);
export default component;
