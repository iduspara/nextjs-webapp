import { slideToggle } from '@assets/scripts/helpers/animations';

const changeToggleText = (element, toggle) => {
  const isInactive =
    (element && element.style.maxHeight === '0px') ||
    element.classList.contains('hidden');

  return isInactive ? toggle.dataset.active : toggle.dataset.initial;
};

export default () => {
  document.querySelectorAll('.author-articles').forEach((container) => {
    const items = container.querySelector('.next-items');
    const itemsToggle = container.querySelector('.next-items-toggle');

    if (itemsToggle) {
      itemsToggle.addEventListener('click', () => {
        itemsToggle.innerHTML = changeToggleText(items, itemsToggle);
        slideToggle(items);
      });
    }
  });
};
