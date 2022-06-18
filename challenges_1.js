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
  for(let key of ordered) {
    removerepeat.push(key)
    removerepeat.sort((a,b) => b-a);
    console.log(removerepeat.indexOf(key)+1);
  }
}
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]); 
//  ----> 6, 4, 2, 1

climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]) 
// '---> 6, 5, 4, 2, 1 '
