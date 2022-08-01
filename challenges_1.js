/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here
  const removerepeat = [...new Set(ranked)];
  const ordered = [...new Set(player)];
  for (let key of ordered) {
    removerepeat.push(key);
    removerepeat.sort((a, b) => b - a);
    console.log(removerepeat.indexOf(key) + 1);
  }
}
// climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
//  ----> 6, 4, 2, 1

// climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
// '---> 6, 5, 4, 2, 1 '

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  for (let i = 0; i < 10000; i++) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) {
      return "YES";
    }
  }
  return "NO";
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    for(let x = 1; x <= 100; x += 1) {
        if(a.every(int => x % int === 0)) {
            if(b.every(int => int % x === 0))
            count += 1;
        }
    }
    return count;
}


/* ************************* CAROUSSEL INFINITE MOVE OF IMAGE ************************************* */

// Images are from unsplash
const pictures = ['https://images.unsplash.com/photo-1537000092872-06bbf7b64f60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14d2fe1244b43a1841569da918066fc4&auto=format&fit=crop&w=1050&q=80', 'https://images.unsplash.com/photo-1537005081207-04f90e3ba640?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffb71f2a2843e802e238c5ff8e4bbb8c&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1536873602512-8e88cc8398b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60a351868d0839e686c8c5a286265f8d&auto=format&fit=crop&w=1050&q=80'];

console.log(projectItem[0]);

[img.src] = [pictures[0]];
let position = 0;

const moveRight = () => {
  if (position >= pictures.length - 1) {
    position = 0;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position + 1];
  position += 1;
};

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    return;
  }
  img.src = pictures[position - 1];
  position -= 1;
};

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);