function solution(balls, share) {
  function factorial(n) {
    if (n < 1) {
      return BigInt(1);
    }
    return BigInt(n) * factorial(n - 1);
  }
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

// -------------------------------------------------------------------------------------------
// BigInt 사용
// js 특성상 수가 너무 커 int 범위에서 벗어날 경우 오류가 발생할 수 있음
// 보다 큰 수를 담을 수 있는 bigint를 사용해야 balls, share의 범위를 감당할 수 있음

// const factorial = (num) => (num === 0 ? BigInt(1) : BigInt(num) * factorial(num - 1));
// function solution(n, m) {
//   return factorial(n) / factorial(n - m) / factorial(m);
// }

// -------------------------------------------------------------------------------------------
// Math.round 사용
// 컴퓨터는 계산할 때 10진법을 2진법으로 변환하는 과정이 필요한데, 이 과정에서 소수 중 일부는 무한소수가 되어버리지만
// 컴퓨터는 메모리 한계로 이 무한소수를 다 담지 못하고 유한소수로 저장해버려 오차가 생김
// Math.round 메소드는 매개변수로 들어온 값을 반올림한 후, 가장 가까운 정수 값을 반환함

// const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));
// function solution(n, m) {
//   return Math.round(factorial(n) / factorial(n - m) / factorial(m));
// }

// function solution(balls, share) {
//   function factorial(n) {
//     if (n < 1) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }

//   return Math.round(
//     factorial(balls) / factorial(balls - share) / factorial(share)
//   );
// }

console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); // 10
console.log(solution(10, 5)); // 252
