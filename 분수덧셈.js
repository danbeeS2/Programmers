function solution(denum1, num1, denum2, num2) {
  let answer = [denum1 * num2 + denum2 * num1, num1 * num2];
  let min = Math.min(...answer);
  for (let i = min; i < 1; i--) {
    if (answer[0] % i == 0 && answer[1] % i == 0) {
      answer = answer.map((el) => el / i);
    }
  }
  return answer;
}

console.log(solution(1, 2, 3, 4));
