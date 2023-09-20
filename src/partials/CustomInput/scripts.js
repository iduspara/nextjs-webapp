import {
  parseGermanNumber,
  germanNumberFormat,
} from '@assets/scripts/helpers/utilities';

export const translateInputs = (inputs) => {
  inputs.forEach((input) => {
    if (input.value) {
      input.value = parseGermanNumber(input.value);

      setTimeout(() => {
        input.value = germanNumberFormat(input.value);
      }, 100);
    }
  });
};

export default () => {
  document.querySelectorAll('.custom-input').forEach((container) => {
    const input = container.querySelector('input');
    const error = container.querySelector('.error-message');
    const isNumberInput = input.classList.contains('number-input');

    if (isNumberInput && input.value) {
      input.value = germanNumberFormat(input.value);
      input.placeholder = germanNumberFormat(input.placeholder);
    }

    const removeLettersAndSpecialChars = (number) =>
      number.replace(/[A-Za-z!@#$%^&*()\s_=+;:'"<>/?|`~\\\{\}\[\]\-]/g, '');

    const checkEmpty = () => {
      if (input.value.length === 0) {
        container.classList.remove('filled');
        return;
      }
      container.classList.add('filled');
    };

    const toggleClassInvalid = () => {
      if (input.checkValidity()) {
        container.classList.remove('invalid');
        return;
      }
      container.classList.add('invalid');
    };

    const checkInvalidNumber = () => {
      const formattedValue = parseGermanNumber(input.value);
      if (
        formattedValue === 'NaN' ||
        formattedValue < parseFloat(input.min) ||
        formattedValue > parseFloat(input.max)
      ) {
        container.classList.add('invalid');
        input.setCustomValidity(error.innerHTML);
      } else {
        container.classList.remove('invalid');
        input.setCustomValidity('');
      }
    };

    checkEmpty();
    toggleClassInvalid();
    input.addEventListener('input', () => {
      checkEmpty();

      if (
        isNumberInput &&
        input.value.slice(-1) !== ',' &&
        input.value.slice(-1) !== '.' &&
        input.value.length > 0
      ) {
        input.value = removeLettersAndSpecialChars(input.value);
        checkInvalidNumber();
        input.value = germanNumberFormat(parseGermanNumber(input.value));
      } else {
        toggleClassInvalid();
      }
    });
  });
};
