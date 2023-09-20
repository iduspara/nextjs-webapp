import { slideToggle } from './animations';

export default (container) => {
  if (!container.classList.contains('initialized')) {
    const animationDuration = getComputedStyle(document.documentElement)
      .getPropertyValue('--animation-duration-l')
      .slice(0, -2);

    container.querySelectorAll('.more-details').forEach((detail) => {
      const resultItem = detail.closest('.result-item');
      const resultItemDetails = resultItem.querySelector(
        '.result-item-details'
      );
      const textDelimiter = resultItem.querySelector(
        '.more-details-text-delimiter'
      );
      const textElement = detail.querySelector('.more-details-text');
      const buttonTextDefault = textElement.textContent || 'Mehr anzeigen';
      const buttonTextActive = detail.dataset.textActive || 'Weniger anzeigen';
      let animationIsFinished = true;

      detail.addEventListener('click', () => {
        if (animationIsFinished) {
          detail.classList.toggle('active');
          textElement.textContent =
            textElement.textContent === buttonTextDefault
              ? buttonTextActive
              : buttonTextDefault;
          animationIsFinished = false;
          slideToggle(resultItemDetails);

          if (textDelimiter) {
            textDelimiter.classList.toggle('hidden');
          }

          setTimeout(() => {
            animationIsFinished = true;
          }, animationDuration);
        }
      });

      window.addEventListener('resize', () => {
        const minimized =
          resultItemDetails.classList.contains('hidden') ||
          resultItemDetails.classList.contains('invisible') ||
          resultItemDetails.style.maxHeight === '0px';

        if (!minimized) {
          resultItemDetails.style.maxHeight = `${resultItemDetails.scrollHeight}px`;
        }
      });
    });

    container.classList.add('initialized');
  }
};
