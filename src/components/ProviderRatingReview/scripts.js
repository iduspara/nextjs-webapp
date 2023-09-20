import toggleDetails from '@assets/scripts/helpers/result-details-toggle';

export default () => {
  document.querySelectorAll('.provider-rating-review').forEach((container) => {
    toggleDetails(container);
  });
};
