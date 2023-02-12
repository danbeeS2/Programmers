// function solution(s) {
//   let answer = [];
//   s = s.split(" ");
//   for (let i = 0; i < s.length; i++) {
//     s[i] === "Z" ? answer.push(+s[i - 1] * -1) : answer.push(+s[i]);
//   }
//   return answer.reduce((pre, cur) => pre + cur, 0);
// }

function solution(s) {
  let answer = 0;
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] === "Z" ? (answer += +s[i - 1] * -1) : (answer += +s[i]);
  }
  return answer;
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
