import Flickity from 'flickity';

export default () => {
  document.querySelectorAll('.experts-slider-content').forEach((container) => {
    const slider = container.querySelector('.slider');
    // eslint-disable-next-line no-unused-vars
    const flky = new Flickity(slider, {
      wrapAround: true,
      groupCells: true,
      autoPlay: true,
      pageDots: false,
    });
  });
};
