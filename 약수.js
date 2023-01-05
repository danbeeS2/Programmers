// function solution(n) {
//   let answer = [];
//   for (let i = n; i > 0; i--) {
//     n % i === 0 ? answer.push(i) : null;
//   }
//   return answer.reverse();
// }

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer.push(i);
  }
  return answer;
}

console.log(solution(24)); //	[1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); //	[1, 29]
