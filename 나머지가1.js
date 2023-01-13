//  Lv.1 나머지가 1이 되는 수 찾기
function solution(n) {
  let answer = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }
  return answer;
}

// function solution(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 1) return i;
//   }
// }
console.log(solution(3)); // 3
console.log(solution(10)); // 3
console.log(solution(12)); // 11
