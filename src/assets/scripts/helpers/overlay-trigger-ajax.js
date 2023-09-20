import { disableScroll, clearScrollLocks } from './bodyScrollLock';
import fadeBoundaries from './fadeBoundaries';

/*
Resolves the Ajax Call to enable overlays in various calculators
*/

const OverlayTriggerAjax = () => {
  document.querySelectorAll('.overlay-trigger').forEach((container) => {
    const overlay = document.querySelector(`#${container.dataset.jsOverlay}`);
    const scrollableContent = overlay.querySelector('.modal .content');

    const toggleOverlay = (event) => {
      event.stopPropagation();
      if (!container.classList.contains('toggle-dont-prevent-default')) {
        event.preventDefault();
      }

      overlay.classList.add('active');
      window.finanztip.disableBodyScroll(scrollableContent);

      if (container.classList.contains('overlay-print')) {
        window.print();
      }
    };

    container.addEventListener('click', toggleOverlay.bind(this));
  });

  document.querySelectorAll('.overlay').forEach((container) => {
    const content = container.querySelector('.content');

    const overlayClose = container.querySelector('.overlay-close');
    const modalClose = container.querySelector('.modal-close');
    const aTags = container.querySelectorAll('a');
    const overlayCloseButton = container.querySelector('.overlay-close-button');
    const anchors = Array.from(aTags).filter(
      (t) => t.pathname === window.location.pathname
    );

    const closeElements = [overlayClose, modalClose, overlayCloseButton, ...anchors];

    closeElements
      .filter((el) => el)
      .forEach((el) => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          container.classList.remove('active');
          window.finanztip.clearScrollLocks();
        });
      });

    if (content) {
      window.finanztip.fadeBoundaries(content, true);

      // We need this hack because for some reason the height of NL modal content is same as its content which is not true on smallest devices.
      // May be because it takes time NL to be loaded
      if (content.classList.contains('js-scroll')) {
        setTimeout(() => {
          content.scrollTop = 1;
          content.scrollTop = 0;
        }, 5000);
      }

      container.querySelector('.content').addEventListener('scroll', () => {
        window.finanztip.fadeBoundaries(content, true);
      });
    }
  });
};

export default () => {
  if (window.finanztip) {
    window.finanztip.overlayTriggerAjax = OverlayTriggerAjax;
    window.finanztip.fadeBoundaries = fadeBoundaries;
  } else {
    window.finanztip = {
      disableBodyScroll: disableScroll,
      overlayTriggerAjax: OverlayTriggerAjax,
      fadeBoundaries,
      clearScrollLocks,
    };
  }
};
