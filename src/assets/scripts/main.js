import domready from 'domready';

// Helpers
import setUpTooltips from './helpers/tooltips';
import setUpAnchorScroll from './helpers/anchorScroll';

// Components
import InputClear from '../../shared/InputClear/scripts';
import Overlay from '../../shared/Overlay/scripts';
import OverlayTrigger from '../../shared/OverlayTrigger/scripts';
import ProviderRatingReview from '../../components/ProviderRatingReview/scripts';
import CustomInput from '../../partials/CustomInput/scripts';
import CustomTextarea from '../../partials/CustomTextarea/scripts';
import CustomCheckboxRadio from '../../partials/CustomCheckboxRadio/scripts';
import HeaderProviderList from '../../context/ExperiencePortal/HeaderProviderList/scripts';
import ProviderRatingFilterList from '../../context/ExperiencePortal/ProviderRatingFilterList/scripts';
import AffiliatePopupContent from '../../partials/AffiliatePopupContent/scripts';
import StickyAffiliatePopup from '../../context/ExperiencePortal/StickyCTAPopups/scripts';
import ExpertsSliderContent from '../../partials/ExpertsSliderContent/scripts';
import overlayTriggerAjax from './helpers/overlay-trigger-ajax';
import PassengerRightsCalculator from '../../components/PassengerRightsCalculator/scripts';
import LinkList from '../../components/LinkList/scripts';
import Link from '../../partials/Link/scripts';
import TwingleFloatingElement from '../../components/TwingleFloatingElement/scripts';
import AuthorArticles from '../../components/AuthorArticles/scripts';

const enhancedDomReady = (init) => {
  domready(init);
  window.addEventListener('reload', init);
};

enhancedDomReady(() => {
  // Helpers
  setUpTooltips();
  setUpAnchorScroll();

  // Components
  InputClear();
  Overlay();
  OverlayTrigger();
  overlayTriggerAjax();
  ProviderRatingReview();
  CustomInput();
  CustomTextarea();
  CustomCheckboxRadio();
  HeaderProviderList();
  ProviderRatingFilterList();
  AffiliatePopupContent();
  StickyAffiliatePopup();
  ExpertsSliderContent();
  PassengerRightsCalculator();
  LinkList();
  Link();
  TwingleFloatingElement();
  AuthorArticles();
});
