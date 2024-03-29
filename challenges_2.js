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


/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if (s.slice(i, i + m).reduce((r, v) => r + v, 0) === d) {
            result++;
        }
    }
    return result;
}

// Show the prime numbers within a range of number

function showPrime(limit) {
  for(let number = 2; number <= limit; number += 1) {
    let isPrime = true;
    for(let factor = 2; factor < number; factor += 1) {
      if(number % factor === 0) {
        isPrime = false;
        break;
      }
    }

    if(isPrime) console.log(number)
  }
}

//  By using the single responsability rule we can do

function Prime(limit) {
  for(let number = 2; number <= limit; number += 1) {
    if(isPrime(number)) console.log(number)
  }
}

function isPrime(number) {
  for(let factor = 2; factor < number; factor += 1)
    if(number % factor === 0) return false;
    return true;
}


function moveElement(arr, index, offset) {
  const out = [...arr];
  const position = index + offset;
  if(position >= arr.length || position < 0) {
    console.error('Invalid Offset')
    return;
  }
  const element = out.splice(index, 1)[0];
  out.splice(position, 0, element);
  return out;
}
