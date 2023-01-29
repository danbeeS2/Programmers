// Lv.1 수박수박수박수박수박수?
function solution(n) {
  let answer = "수박".repeat(Math.floor(n / 2));
  return n % 2 === 0 ? answer : answer + "수";
}

function solution(n) {
  return "수박".repeat(n).slice(0, n);
}

console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"
console.log(solution(5)); // "수박수박수"
