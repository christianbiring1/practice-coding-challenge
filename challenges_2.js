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


function spinWords(string){
  //TODO Have fun :)
   const str = string.split(' ');
   let out = '';
   let replaced = '';
   for(let key of str) {
       if(key.length >= 5) {
     string = string.replace(key, key.split('').reverse().join(''));
       }
   }
   return string;
}

function StringChallenge(str) {
  const reducerHash = {
    ab: "c",
    ac: "b",
    ba: "c",
    bc: "a",
    ca: "b",
    cb: "a"
  };
  let initial, key;
  while (str !== initial) {
    initial = str;
    for (key in reducerHash) {
      str = str.replace(key, reducerHash[key]);
    }
    // return str.length;
  }
  return str;
}
