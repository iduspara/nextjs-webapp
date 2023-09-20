export default () => {
  document.querySelectorAll('.custom-textarea').forEach((container) => {
    const checkEmpty = () => {
      if (container.value.length === 0) {
        container.classList.remove('filled');
        return;
      }
      container.classList.add('filled');
    };

    checkEmpty();
    container.addEventListener('input', () => {
      checkEmpty();
    });
  });
};