import { disableScroll } from '@assets/scripts/helpers/bodyScrollLock';

export default () => {
  const openPopup = (popup, scrollableContent) => {
    popup.classList.add('active');
    disableScroll(scrollableContent);
  };

  document.querySelectorAll('.sticky-affiliate-popup').forEach((container) => {
    const affiliatePopupTrigger = container.querySelector(
      '.sticky-cta-affiliates-button'
    );
    const affiliatePopup = container.querySelector('.affiliate-popup');
    const affiliatePopupScrollableContent = affiliatePopup.querySelector(
      '.affiliate-popup-content'
    );

    const providerRatinpPopupTrigger = container.querySelector(
      '.sticky-cta-provider-rating-button'
    );
    const providerRatinpPopup = container.querySelector(
      '.provider-rating-popup'
    );
    const providerRatinpPopupScrollableContent =
      container.querySelector('.modal .content');

    if (affiliatePopupTrigger) {
      affiliatePopupTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup(affiliatePopup, affiliatePopupScrollableContent);
      });
    }
    providerRatinpPopupTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup(providerRatinpPopup, providerRatinpPopupScrollableContent);
    });

    if (window.location.hash === '#bewertung') {
      openPopup(providerRatinpPopup, providerRatinpPopupScrollableContent);
    }
  });
};
