// Lv.0 저주의 숫자 3
function solution(n) {
  let x3 = 0;
  for (let i = 1; i <= n; i++) {
    x3++;
    while (x3 % 3 === 0 || (x3 + "").split("").includes("3")) {
      x3++;
    }
  }
  return x3;
}

// function solution(n) {
//   let answer = [];
//   let ans = 0;
//   while (n--) {
//     if (ans === 3 || ans % 3 === 0 || (ans + "").split("").includes("3")) {
//       ans += 1;
//     }
//     ans++;
//     answer.push(ans);
//   }
//   return answer;
// }
console.log(solution(15)); // 25
console.log(solution(40)); // 76
