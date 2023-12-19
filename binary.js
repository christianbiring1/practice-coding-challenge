//  Binary search code that finds an element in an array

Array.prototype.binary_search = function(target) {
  var half = parseInt((this.length / 2));

  if(!this.includes(target)) return undefined;

  if (target === this[half]) {
    return half;
  }

  if (target > half) {
    return half + this.slice(half, this.length).binary_search(target);
  } else {
    return this.slice(0, half).binary_search(target);
  }
};

const arr = [1,2,3,4, 5];

console.log(arr.binary_search(5))