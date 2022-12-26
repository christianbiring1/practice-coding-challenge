const array = [['a', 1], ['b', 2], ['c', 3]];

const object = array.reduce((accumulator, currentValue) => {
  accumulator[currentValue[0]] = currentValue[1];
  return accumulator
}, {});


console.log(object);


const listItem1 = [[12, 'spoon'], [12, 'brushteeth'], [24, 'spaghetti']];


const listItem2 = [[2, 'brushteeth'], [5, 'spoon'], [25, 'spaghetti'], [200, 'unkwon'], [4, 'shoes']];


const CombinedItem = (arr1, arr2) => {
    const object1 = arr1.reduce((acc, cur) => {
  acc[cur[1]] = cur[0];
  return acc;
}, {});

const object2 = arr2.reduce((acc, cur) => {
    acc[cur[1]] = cur[0];
    return acc;
}, {});
  const sum = {};
  // get the keys from both objects
  const keys = Object.keys(object1).concat(Object.keys(object2));
//   Remove duplicate
const newKeys = [...new Set(keys)];
// sum the values for each unique key
newKeys.forEach(key => {
  sum[key] = (object1[key] || 0) + (object2[key] || 0);
});
  console.log(sum);
}


CombinedItem(listItem1, listItem2);