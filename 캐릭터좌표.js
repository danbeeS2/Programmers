// // Lv.0 캐릭터의 좌표
// function solution(keyinput, board) {
//   let x = 0;
//   let y = 0;
//   let range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

//   for (k of keyinput) {
//     if (k === "right") x++;
//     if (k === "left") x--;
//     if (k === "up") y++;
//     if (k === "down") y--;

//     if (Math.abs(x) > range[0]) {
//       x = x > 0 ? range[0] : range[0] * -1;
//     }

//     if (Math.abs(y) > range[0]) {
//       y = y > 0 ? range[1] : range[1] * -1;
//     }
//   }
//   return [x, y];
// }

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //	[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); // [0, -4]
console.log(solution(["up", "up", "up", "down"], [3, 3])); // [0,0]

function solution(keyinput, board) {
  let result = [0, 0];
  for (let p of keyinput) {
    switch (p) {
      case "left":
        if (-result[0] < board[0] / 2 - 1) result[0]--;
        break;
      case "right":
        if (result[0] < board[0] / 2 - 1) result[0]++;
        break;
      case "up":
        if (result[1] < board[1] / 2 - 1) result[1]++;
        break;
      case "down":
        if (-result[1] < board[1] / 2 - 1) result[1]--;
        break;
    }
  }
  return result;
}
