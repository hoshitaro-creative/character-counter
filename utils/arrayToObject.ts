const arrayToObject = (array: any[]) =>
  array.reduce((acc, curr, index) => {
    Object.assign(acc, { [index]: curr });
    return acc;
  }, {});

const nestetArrayToObject = (array: any[]) => {
  if (Array.isArray(array[0])) {
    arrayToObject(array);
    for (const childArray of array) {
      arrayToObject(childArray);
    }
  } else {
    return arrayToObject(array);
  }
};

export default nestetArrayToObject;
