import toggleDetails from '@assets/scripts/helpers/result-details-toggle';

export default () => {
  document.querySelectorAll('.affiliate-popup-content').forEach((container) => {
    toggleDetails(container);
  });
};
