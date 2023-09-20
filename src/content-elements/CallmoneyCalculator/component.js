import React from 'react';

const component = () => (
  <div
    data-track="ftcalculators_callmoneycalculator"
    className="ftdefaultcontentelement"
    id="content-108665">
    <div
      id="c108665"
      className="frame frame-default frame-type-ftcalculators_callmoneycalculator frame-layout-0">
      <div className="container padding-top-s sm:padding-top-xl padding-bottom-s sm:padding-bottom-xl">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <div className="ft-calculators">
              <div className="content-box border-radius-l">
                <div
                  className="callmoney-calculator ft-calculator"
                  id="callMoneyCalculator">
                  <form
                    data-calculateonpageload="0"
                    method="post"
                    name="inputData"
                    noValidate="novalidate"
                    className="ft-calculator__form submitted"
                    id="callMoneyCalculatorForm"
                    action="/geldanlage/callmoneytool/?tx_ftcalculators_callmoneycalculator%5Baction%5D=result&amp;tx_ftcalculators_callmoneycalculator%5Bcontroller%5D=CallMoneyCalculator">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 monthy-rate-container">
                        <div className="margin-bottom-s">
                          <div className="h5">
                            <label htmlFor="tx_ftcalculators_callmoneycalculator[amount]">
                              Wie viel möchtest Du anlegen?
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="custom-input margin-bottom-xl filled">
                            <div className="input-outline">
                              <div className="input-wrapper">
                                <input
                                  className="number-input investment-amount"
                                  id="monthlyRate"
                                  max="500000"
                                  min="500"
                                  name="tx_ftcalculators_callmoneycalculator[amount]"
                                  placeholder="0"
                                  step=""
                                  type="text"
                                  defaultValue="10000"
                                  pattern="[0-9,\.]*"
                                  required=""
                                />

                                <label htmlFor="monthlyRate"> € </label>
                              </div>
                            </div>

                            <div className="error-message">
                              Bitte gib eine ganze Zahl von 500,00 bis
                              500.000,00 ein.
                            </div>

                            <div className="text-addon">
                              <p
                                style={{
                                  display: 'none',
                                }}
                                data-hint="amountCheck"
                                data-amountcheck="amount"
                                data-amountchecktext="Hinweis: Die gesetzliche Einlagensicherung gilt nur für Beträge bis 100.000 Euro. Verteile die {0} Euro besser auf mehrere Banken."></p>
                              <p
                                id="amountRangeElement"
                                className="amount-range">
                                Gib einen Betrag zwischen 500 € und 500.000 €
                                ein.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="callmoney-calculator__duration col-xs-12 col-sm-6 border-before md-table-cell">
                        <div className="margin-bottom-s">
                          <div className="h5">
                            <label htmlFor="duration">
                              Wie lange möchtest Du anlegen?
                            </label>
                          </div>
                        </div>

                        <div className="custom-select" tabIndex="0">
                          <div className="input-wrapper">
                            <select
                              defaultValue="6"
                              id="duration"
                              name="tx_ftcalculators_callmoneycalculator[duration]">
                              <option value="1">1 Monat</option>

                              <option value="2">2 Monate</option>

                              <option value="3">3 Monate</option>

                              <option value="4">4 Monate</option>

                              <option value="5">5 Monate</option>

                              <option value="6">6 Monate</option>

                              <option value="7">7 Monate</option>

                              <option value="8">8 Monate</option>

                              <option value="9">9 Monate</option>

                              <option value="10">10 Monate</option>

                              <option value="11">11 Monate</option>

                              <option value="12">12 Monate</option>

                              <option value="13">13 Monate</option>

                              <option value="14">14 Monate</option>

                              <option value="15">15 Monate</option>

                              <option value="16">16 Monate</option>

                              <option value="17">17 Monate</option>

                              <option value="18">18 Monate</option>

                              <option value="19">19 Monate</option>

                              <option value="20">20 Monate</option>

                              <option value="21">21 Monate</option>

                              <option value="22">22 Monate</option>

                              <option value="23">23 Monate</option>

                              <option value="24">24 Monate</option>
                            </select>
                            <div className="selected">6 Monate</div>
                            <hr className="separator-dropdown" />
                            <div className="options">
                              <div className="option" data-value="1 Monat">
                                1 Monat
                              </div>
                              <div className="option" data-value="2 Monate">
                                2 Monate
                              </div>
                              <div className="option" data-value="3 Monate">
                                3 Monate
                              </div>
                              <div className="option" data-value="4 Monate">
                                4 Monate
                              </div>
                              <div className="option" data-value="5 Monate">
                                5 Monate
                              </div>
                              <div className="option" data-value="6 Monate">
                                6 Monate
                              </div>
                              <div className="option" data-value="7 Monate">
                                7 Monate
                              </div>
                              <div className="option" data-value="8 Monate">
                                8 Monate
                              </div>
                              <div className="option" data-value="9 Monate">
                                9 Monate
                              </div>
                              <div className="option" data-value="10 Monate">
                                10 Monate
                              </div>
                              <div className="option" data-value="11 Monate">
                                11 Monate
                              </div>
                              <div className="option" data-value="12 Monate">
                                12 Monate
                              </div>
                              <div className="option" data-value="13 Monate">
                                13 Monate
                              </div>
                              <div className="option" data-value="14 Monate">
                                14 Monate
                              </div>
                              <div className="option" data-value="15 Monate">
                                15 Monate
                              </div>
                              <div className="option" data-value="16 Monate">
                                16 Monate
                              </div>
                              <div className="option" data-value="17 Monate">
                                17 Monate
                              </div>
                              <div className="option" data-value="18 Monate">
                                18 Monate
                              </div>
                              <div className="option" data-value="19 Monate">
                                19 Monate
                              </div>
                              <div className="option" data-value="20 Monate">
                                20 Monate
                              </div>
                              <div className="option" data-value="21 Monate">
                                21 Monate
                              </div>
                              <div className="option" data-value="22 Monate">
                                22 Monate
                              </div>
                              <div className="option" data-value="23 Monate">
                                23 Monate
                              </div>
                              <div className="option" data-value="24 Monate">
                                24 Monate
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <span
                            className="col-xs-12 font-size-xxs color-grey padding-top-s no-padding-left no-padding-right hidden"
                            data-hint="durationCheck">
                            Hinweis: Über eine so lange Zeit solltest Du das
                            Geld nur auf dem Tagesgeldkonto lassen, wenn Du es
                            eventuell kurzfristig benötigst. Prüfe ansonsten die
                            Anlage in Festgeld oder Indexfonds (ETFs).
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="margin-top-xl">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="submit-button-container">
                            <div className="border-bottom margin-right-s sm:margin-right-xl"></div>
                            <div className="submit-button">
                              <button
                                type="submit"
                                className="girokonto-submit-btn spinner-button">
                                <span className="spinner size-s hidden color-white margin-right-xs"></span>
                                <span>Jetzt berechnen</span>
                              </button>
                            </div>
                            <div className="border-bottom margin-left-s sm:margin-left-xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div id="callMoneyResult"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default component;
