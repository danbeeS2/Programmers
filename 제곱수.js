function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(144)); // 1
console.log(solution(976)); // 2
