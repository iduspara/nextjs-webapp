/* eslint-disable import/prefer-default-export */
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default () => {
  document.querySelectorAll('[data-tooltip-text]').forEach(($elem) => {
    const text = $elem.dataset.tooltipText;
    const buttonText = $elem.dataset.tooltipButtontext || 'Verstanden';
    const noButton = $elem.dataset.tooltipNoButton || false;

    const content = noButton
      ? `
      <div class="tooltip text-left padding-s">
        <div class="tooltip__text">${text}</div>
      </div>
    `
      : `
      <div class="tooltip text-left padding-s">
        <div class="tooltip__text margin-bottom-s">${text}</div>
        <button class="secondary small dark-popover tooltip__buttontext no-margin">${buttonText}</button>
      </div>
    `;
    tippy($elem, {
      content,
      allowHTML: true,
      arrow: true,
      offset: [-20, 14],
      trigger: 'click',
      theme: 'ftip',
      zIndex: 20,
      interactive: true,
      onCreate(instance) {
        const popperButton = instance.popper.querySelector(
          '.tooltip__buttontext'
        );

        if (popperButton) {
          popperButton.addEventListener('click', (e) => {
            e.preventDefault();
            instance.hide();
          });
        }
      },
    });
  });
};
