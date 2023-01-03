function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
