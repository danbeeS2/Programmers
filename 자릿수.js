function solution(n) {
  return (n + "").split("").reduce((pre, cur) => pre + +cur, 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
