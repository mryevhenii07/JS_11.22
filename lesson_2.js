const makeDeepCopy = (obj) => {
  if (typeof obj === 'object') {
    const cloneObject = {};
    const keysObject = Object.keys(obj);

    keysObject.forEach((key) => {
      cloneObject[key] = makeDeepCopy(obj[key]);
    });
  } else {
    throw new Error();
  }
};

const selectFromInterval = (array, firstInterval, secondInterval) => {
  const min = Math.min(firstInterval, secondInterval);
  const max = Math.max(firstInterval, secondInterval);
  const newArr = [];

  if (!Array.isArray(array)) {
    throw new Error();
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error();
    }
    if (array[i] >= min && array[i] <= max) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const createIterable = (startInterval, endInterval) => {
  const result = [];

  if (typeof startInterval !== 'number' || typeof endInterval !== 'number') {
    throw new Error();
  }
  if (endInterval <= startInterval) {
    throw new Error();
  }
  for (let i = startInterval; i <= endInterval; i++) {
    result.push(i);
  }
  return result.join(',');
};
