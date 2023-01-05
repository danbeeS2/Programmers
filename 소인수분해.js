function solution(n) {
  let answer = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      answer.push(divisor);
      n /= divisor;
    } else divisor++;
  }
  return [...new Set(answer)];
}
console.log(solution(12)); // [2, 3]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]
