import domready from 'domready';
import fadeBoundaries from '@assets/scripts/helpers/fadeBoundaries';
import setUpUpdateNewslleterOverlayVisibilityStatus from '@assets/scripts/helpers/updateNewslleterOverlayVisibilityStatus';
import {
  disableScroll,
  clearScrollLocks,
} from '@assets/scripts/helpers/bodyScrollLock';

export default () => {
  const twingleElements = document.querySelectorAll(
    '.twingle-floating-element'
  );

  const currentUrl = window.location.host;
  const isDomainSchuleOrStifting =
    currentUrl.includes('schule') || currentUrl.includes('stiftung');

  if (twingleElements.length === 0 || isDomainSchuleOrStifting) {
    return;
  }

  // This button is presnet when the page has table of content.

  let isVisited = false;

  const isMobileScreen = () => window.innerWidth <= 1024 || false;
  const isTimeToShow = () => {
    // when scrolling down 2/3 of the page
    const { scrollHeight, clientHeight } = document.documentElement;
    const threshold = ((scrollHeight - clientHeight) / 3) * 2;

    return threshold;
  };
  const isAnyStatePresent = (element) => element.classList.contains('state-2');

  const moveFloatingTOCButton = (element) => {
    const floatingTOCButton = document.querySelector('#floating-toc-button');
    if (!floatingTOCButton) {
      return;
    }

    if (!isMobileScreen()) {
      floatingTOCButton.style.right = 'auto';
      floatingTOCButton.style.left = '80px';

      return;
    }

    const elementHeight = element ? element.clientHeight : 0;

    floatingTOCButton.style.bottom = `${elementHeight + 40}px`;
  };

  const openStateOfElementIfElementReached = (element) => {
    const shareBar = document.querySelector('.share-bar');

    if (shareBar) {
      const isState2 = element.classList.contains('state-2');

      const shareBarRect = shareBar.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPostionReachesShareBar =
        shareBarRect.bottom + 108 <= windowHeight; // 108 is the height of the FAB button + bottom margin in open state

      if (
        scrollPostionReachesShareBar &&
        isMobileScreen() &&
        !isVisited &&
        !isState2
      ) {
        element.classList.add('state-1');
        element.classList.remove('state-2');
        isVisited = true;

        moveFloatingTOCButton(element);
      }
    }
  };

  const toggleElementBasedOnScroll = (element) => {
    let isScrollUsed = false;

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      const displayStateBasedOnScreen = isMobileScreen()
        ? 'display-block'
        : 'state-1';

      if (isMobileScreen()) {
        moveFloatingTOCButton(element);
      }

      if (
        scrollPosition >= isTimeToShow() &&
        !isScrollUsed &&
        !isAnyStatePresent(element)
      ) {
        element.classList.add(displayStateBasedOnScreen);
        isScrollUsed = true;
      }

      // If the share bar - social icons component is present on the page and scroll reach it show different state.
      openStateOfElementIfElementReached(element);
    });
  };

  // TODO: We have issue with loading TOC button which has some deplay and its dynamically added, so we have to do some delay here.
  setTimeout(() => {
    domready(setUpUpdateNewslleterOverlayVisibilityStatus);
    twingleElements.forEach((container) => {
      const twingleElement = container;
      const showButton = twingleElement.querySelector('.btn-twingle');
      const showOverlay = twingleElement.querySelectorAll(
        '.twingle-show-overlay'
      );
      const closeButton = twingleElement.querySelector('.btn-chevron-close');
      const content = twingleElement.querySelector('.twingle-content-body');

      fadeBoundaries(content, true);

      content.addEventListener('scroll', () => {
        fadeBoundaries(content, true);
      });

      moveFloatingTOCButton();

      toggleElementBasedOnScroll(twingleElement);

      const handleClick = () => {
        if (twingleElement.classList.contains('state-2')) {
          return;
        }

        disableScroll(container);

        window.finanztip?.newsletter?.updateOverlayVisibilityStatus(true);

        if (isMobileScreen()) {
          twingleElement.classList.remove('state-1');
          twingleElement.classList.add('state-2');
          return;
        }

        let delayTime = 800;

        if (twingleElement.classList.contains('state-1')) {
          twingleElement.classList.add('animation-state-expand');
          delayTime = 600;
        } else {
          twingleElement.classList.remove('state-1', 'animation-state-expand');
          twingleElement.classList.add('animation-state-move-left');
        }

        setTimeout(() => {
          twingleElement.classList.remove(
            'state-1',
            'animation-state-expand',
            'animation-state-move-left'
          );
          twingleElement.classList.add('state-2');
        }, delayTime);
      };

      showButton.addEventListener('click', handleClick);

      showOverlay.forEach((button) => {
        button.addEventListener('click', handleClick);
      });

      closeButton.addEventListener('click', () => {
        if (twingleElement.classList.contains('state-2')) {
          clearScrollLocks(container);
          window.finanztip?.newsletter?.updateOverlayVisibilityStatus(false);
        }

        twingleElement.classList.remove('state-1', 'state-2');
        twingleElement.classList.add('display-block');

        if (isMobileScreen()) {
          moveFloatingTOCButton(container);
        }
      });
    });
  }, 500);
};
