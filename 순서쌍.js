function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? cnt++ : 0;
  }
  return cnt;
}

console.log(solution(20)); // 6 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1)
console.log(solution(100)); // 9 (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1)

// n의 범위가 크기 때문에 (1 ≤ n ≤ 1,000,000)  Math.sqrt(n) 사용
// function solution(n) {
//   let ans = 0;
//   for (let i = 1; i < Math.sqrt(n); i++) {
//     if (n % i === 0) ans += 2;
//   }
//   return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
// }
// Number.isInteger() 메서드는 주어진 값이 정수인지 판별
// Math.sqrt(n)가 정수라면 순서쌍은 (√n, √n)이 되므로 ans에 1을 더해야 함
