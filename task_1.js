const concatStrings = (firstString = '', separator = '') => {
  return (secondString) => {
    if (typeof separator !== 'string') {
      separator = '';
    }

    if (typeof secondString !== 'string') {
      return `${firstString}`;
    }

    return concatStrings(`${firstString}${separator}${secondString}`, separator);
  };
};

concatStrings('first')('second')('third')();
concatStrings('first', null)('second')()('third');
concatStrings('first', '123')('second')('third')();
concatStrings('some-value')('')('')(null);
concatStrings('some-value')(2);
concatStrings('some-val')('333')(123n)('end');
