import React from 'react';
import Component from './component';

export default {
  title: 'Components/Passenger Rights Calculator',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  resetButtonLabel: 'Neu berechnen',
  affiliateText:
    'Wenn Sie sich bei der Entschädigungsforderung helfen lassen wollen, empfehlen wir die&nbsp;Sofortentschädiger <a href="//tools.finanztip.de/track/?linkcode=euflight-flugrechtsofort-rg&amp;source=&amp;pos=ftcalculators_passengerrightscalculator&amp;path=%2Ffluggastrechte%2F&amp;cat=Recht%20%26%20Steuern&amp;type=redir&amp;mobile=0&amp;" target="_blank" class="affiliate">EUflight</a>&nbsp;und <a href="//tools.finanztip.de/track/?linkcode=compensation2go-flugrechtsofort-rg&amp;source=&amp;pos=ftcalculators_passengerrightscalculator&amp;path=%2Ffluggastrechte%2F&amp;cat=Recht%20%26%20Steuern&amp;type=redir&amp;mobile=0&amp;" target="_blank" class="affiliate">Compensation2go</a> oder die Portale&nbsp;<a href="//tools.finanztip.de/track/?linkcode=flugverspaetet-flugrechtinkasso-rg&amp;source=&amp;pos=ftcalculators_passengerrightscalculator&amp;path=%2Ffluggastrechte%2F&amp;cat=Recht%20%26%20Steuern&amp;type=redir&amp;mobile=0&amp;" target="_blank" class="affiliate">flug-verspaetet.de</a>, SOS Flugverspätung,&nbsp;EUClaim&nbsp;und&nbsp;Claim Flights',
};
