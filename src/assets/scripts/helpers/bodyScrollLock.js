import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

let scrollBarPosition = null;
let popupsCurrentlyOpen = 0;

export function disableScroll(element, object) {
  const documentBody = document.querySelector('body');

  scrollBarPosition = window.scrollY;

  disableBodyScroll(element, object);

  if (documentBody) {
    // We need this fix because on ios devices when body scroll is removed the page jups to top position of 0px
    documentBody.style.top = `${scrollBarPosition * -1}px`;
  }

  // This is for keeping track of how many popups are currently open, so scroll isn't broken when there are more
  popupsCurrentlyOpen += 1;
}

export function clearScrollLocks() {
  const documentBody = document.querySelector('body');

  popupsCurrentlyOpen -= 1;
  if (popupsCurrentlyOpen < 1) {
    clearAllBodyScrollLocks();

    if (documentBody) {
      documentBody.style.top = 'auto';
    }

    window.scroll(0, scrollBarPosition);
    scrollBarPosition = null;
  }
}
