export default () => {
  document.querySelectorAll('.input-clear').forEach((container) => {
    const parent = container.parentElement;
    const input = parent.querySelector('input');

    container.addEventListener('click', () => {
      input.value = '';
      parent.classList.remove('filled');
      input.focus();
    });

    if (input) {
      input.addEventListener('input', () => {
        if (input.value.length === 0) {
          parent.classList.remove('filled');
        } else {
          parent.classList.add('filled');
        }
      });
    }
  });
};
