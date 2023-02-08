// Lv.1 콜라츠 추측
// 콜라츠 추측 : 모든 수를 1로 만들 수 있다는 추측
// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
function solution(num) {
  let cnt = 0;
  while (num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
  }
  return cnt < 500 ? cnt : -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
