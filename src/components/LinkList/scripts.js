import { slideToggle } from '@assets/scripts/helpers/animations';

export default () => {
  document.querySelectorAll('.link-list').forEach((container) => {
    const remaining = container.querySelector('.link-list-container-remaining');
    const remainingToggle = container.querySelector('.remaining-toggle');

    if (remainingToggle) {
      remainingToggle.addEventListener('click', () => {
        if (remainingToggle.classList.contains('active')) {
          remainingToggle.innerHTML = remainingToggle.dataset.initial;
          remainingToggle.classList.remove('active');
        } else {
          remainingToggle.innerHTML = remainingToggle.dataset.active;
          remainingToggle.classList.add('active');
        }
        slideToggle(remaining);
      });
    }
  });
};
