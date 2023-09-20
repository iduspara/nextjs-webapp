export default () => {
  document.querySelectorAll('.custom-checkbox-radio').forEach((container) => {
    const checkbox = container.querySelector('input[type="checkbox"]');
    const radio = container.querySelector('input[type="radio"]');
    const span = document.createElement('span');

    if (checkbox) {
      span.classList.add('checkbox-span');
    } else if (radio && radio.classList.contains('button-icon')) {
      span.classList.add('bullet-span');
    } else if (radio) {
      span.classList.add('radio-span');
    }

    container.appendChild(span);
  });
};
