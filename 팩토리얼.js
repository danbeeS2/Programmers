function solution(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans *= i;

    if (ans === n) {
      return i;
    }

    if (ans > n) {
      return i - 1;
    }
  }
}
console.log(solution(16)); // 3
console.log(solution(3628800)); // 10
console.log(solution(23)); // 3
console.log(solution(25)); // 4
