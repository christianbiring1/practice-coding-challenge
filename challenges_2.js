function arraydiagonal(arr) {
    const res = [];
    let out = '';
    for(let i = 0; i < arr.length; i += 1) {
        res.push(arr[i][i]);
    }
    const diagonal = res[0];
     const isEqualToDiagonal = res.every(item => item === diagonal);
     if(isEqualToDiagonal) {
         out = 'YES';
     } else {
         out = 'NO'
     }
     return out;
}

console.log(arraydiagonal([
    [1, 2, 3, 4],
    [4, 1, 2, 3],
    [24, 2, 1, 5, 4],
    [7, 5, 0, 1, 6, 8]
  ])
);
