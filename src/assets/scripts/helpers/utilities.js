export const isTouchScreen = () => window.matchMedia('(hover: none)').matches;

export const wrap = (elem, wrapper) => {
  elem.parentNode.insertBefore(wrapper, elem);
  wrapper.appendChild(elem);
};

export const wrapMultiple = (elems, wrapper) => {
  elems.forEach((elem) => {
    wrap(elem, wrapper);
  });
};

// Function for matching a small string within a big string
export const compareStrings = (smallString, bigString) => {
  const smallStringArray = smallString
    .toLowerCase()
    .replace(/\s+/g, '')
    .split('');
  const bigStringArray = bigString.toLowerCase().replace(/\s+/g, '').split('');
  const adjustedBigStringArray = [];

  smallStringArray.forEach((smallChar) => {
    let matchFound = false;

    bigStringArray.forEach((bigChar, index) => {
      if (!matchFound && smallChar === bigChar) {
        adjustedBigStringArray.push(smallChar);
        bigStringArray.splice(0, index);
        matchFound = true;
      }
    });
  });

  return (
    JSON.stringify(smallStringArray) === JSON.stringify(adjustedBigStringArray)
  );
};

export const cleanSpecialChars = (input) =>
  // Removes anything starting with & and ending with ;
  // Also removes soft hyphens explicitly, because they are not seen by innerHTML
  input.replace(/&.+?;/g, '').replace(/\u00AD/g, '');

export const germanNumberFormat = (number, isCurrency = false) => {
  if (isCurrency) {
    const germanFormat = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });

    return germanFormat.format(number).slice(0, -2);
  }
  const germanFormat = new Intl.NumberFormat('de-DE');
  return germanFormat.format(number);
};

export const parseGermanNumber = (number) =>
  parseFloat(number.replaceAll('.', '').replaceAll(',', '.'));
