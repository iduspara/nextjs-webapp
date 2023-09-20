import React from 'react';
import ButtonWrapper from '@components/ButtonWrapper/component';
import CustomInput from '@partials/CustomInput/component';

const component = (props) => (
  <div className="provider-suggestion">
    <div className="content-box">
      <h2 className="headline">{props.headline}</h2>
      <p className="subline">{props.subline}</p>
      <hr className="separator" />
      <div className="inputs">
        <div>
          <CustomInput
            id="provider-name"
            label="Name Deines Anbieters"
            placeholder="Anbieter Name"
            name="provider-name"
            required="required"
            textaddon="Zu welchem Anbieter würdest Du gerne eine einen Erfahrungsbericht erstellen?"
          />
        </div>
        <div>
          <CustomInput
            id="user-name"
            label="Dein Name"
            placeholder="Dein Name"
            name="user-name"
            optional={true}
          />
        </div>
      </div>
      <div className="margin-top-xl">
        <ButtonWrapper buttonLabel="Vorschlag einreichen" />
      </div>
    </div>
  </div>
);

export default component;
