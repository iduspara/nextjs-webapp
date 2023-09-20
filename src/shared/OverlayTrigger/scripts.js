import {
  disableScroll,
  clearScrollLocks,
} from '@assets/scripts/helpers/bodyScrollLock';

export default () => {
  document.querySelectorAll('.overlay-trigger').forEach((container) => {
    const overlay = document.querySelector(`#${container.dataset.jsOverlay}`);
    const scrollableContent = overlay.classList.contains('sidebar')
      ? overlay.querySelector('.modal-right .content')
      : overlay.querySelector('.modal .content');

    const toggleOverlay = (event) => {
      if (!container.classList.contains('toggle-dont-prevent-default')) {
        event.preventDefault();
      }

      overlay.classList.toggle('active');

      if (overlay.classList.contains('active')) {
        disableScroll(scrollableContent);
      } else {
        clearScrollLocks();
      }

      if (container.classList.contains('overlay-print')) {
        window.print();
      }
    };

    container.addEventListener('click', toggleOverlay.bind(this));

    // This is to allow AS to call the functions.
    // We have condition here because on TYPO3 window.finanztip is defined on top level but for
    // projects like experience-portal window.finanztip is not defined and we have to define it.
    if (window.finanztip) {
      window.finanztip.disableBodyScroll = disableScroll;
      window.finanztip.clearScrollLocks = clearScrollLocks;
    } else {
      window.finanztip = {
        disableBodyScroll: disableScroll,
        clearScrollLocks,
      };
    }
  });
};
