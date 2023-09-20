import { scrollToElement } from '@assets/scripts/helpers/animations';

export default () => {
  const anchor = window.location.hash;
  const anchorTarget = anchor ? document.querySelector(anchor) : null;

  if (anchorTarget) {
    scrollToElement(anchorTarget, 200);
  }
};
