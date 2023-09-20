import { scrollToElement } from '@assets/scripts/helpers/animations';

export default () => {
  document.querySelectorAll('a').forEach((container) => {
    // In some cases we have href which contains #! as a value.
    // In those cases new URL throws error and we need this condition.
    if (typeof container.href !== 'object' && container.href.includes('http')) {
      const linkURL = new URL(container.href);

      if (linkURL.pathname === window.location.pathname && linkURL.hash) {
        container.addEventListener('click', (event) => {
          event.preventDefault();
          const target = document.querySelector(linkURL.hash);
          scrollToElement(target);
        });
      }
    }
  });
};
