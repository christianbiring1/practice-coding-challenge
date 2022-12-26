const array = [['a', 1], ['b', 2], ['c', 3]];

const object = array.reduce((accumulator, currentValue) => {
  accumulator[currentValue[0]] = currentValue[1];
  return accumulator
}, {});


console.log(object);