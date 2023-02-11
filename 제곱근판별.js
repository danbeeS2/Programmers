// Lv.1 정수 제곱근 판별
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
console.log(Number.isInteger(Math.sqrt(9)));
console.log(solution(121)); // 144
console.log(solution(3)); // -1
