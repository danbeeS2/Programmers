// Lv.0 유한소수 판별하기
function solution(a, b) {
  let answer = 0;
  let divisorA = [];

  // a의 약수를 찾기
  for (let i = 0; i <= a; i++) {
    if (a % i === 0) divisorA.push(i);
  }

  // a의 약수로 b를 나누기 --> 기약분수
  for (div of divisorA) {
    if (b % div === 0 && a % div === 0) {
      b /= div;
      a /= div;
    }
  }
  console.log(divisorA);

  // b의 소인수가 2와 5만 존재 --> 유한소수 1리턴
  let primeB = [];
  let divisor = 2;
  while (b >= 2) {
    if (b % divisor === 0) {
      if (divisor !== 2 && divisor !== 5) {
        primeB.push(divisor);
      }
      b /= divisor;
    } else divisor++;
  }

  return primeB.length === 0 ? 1 : 2;
}
console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
console.log(solution(12, 36)); // 2  // 1번 10번 테스트케이스 기대값: 2; 출력값: 1;

// 최대공약수로 나누고... 2,5로 계속나눠서 1인지만 확인
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
