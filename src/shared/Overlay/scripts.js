import fadeBoundaries from '@assets/scripts/helpers/fadeBoundaries';
import { clearScrollLocks } from '@assets/scripts/helpers/bodyScrollLock';

export default () => {
  document.querySelectorAll('.overlay:not(.sidebar)').forEach((container) => {
    const content = container.querySelector('.content');

    const overlayClose = container.querySelector('.overlay-close');
    const modalClose = container.querySelector('.modal-close');
    const overlayCloseButton = container.querySelector('.overlay-close-button');
    const aTags = container.querySelectorAll('a');
    const anchors = Array.from(aTags).filter(
      (t) => t.pathname === window.location.pathname
    );

    const closeElements = [
      overlayClose,
      modalClose,
      overlayCloseButton,
      ...anchors,
    ];
    closeElements
      .filter((el) => el)
      .forEach((el) => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          container.classList.remove('active');
          clearScrollLocks();
        });
      });

    if (content) {
      fadeBoundaries(content, true);

      // We need this hack because for some reason the height of NL modal content is same as its content which is not true on smallest devices.
      // May be because it takes time NL to be loaded
      if (content.classList.contains('js-scroll')) {
        setTimeout(() => {
          content.scrollTop = 1;
          content.scrollTop = 0;
        }, 5000);
      }

      container.querySelector('.content').addEventListener('scroll', () => {
        fadeBoundaries(content, true);
      });
    }
  });
};
