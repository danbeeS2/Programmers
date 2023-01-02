// 피자가게는 피자를 일곱 조각으로 잘라 줍니다
function solution(n) {
  return n > 7 ? Math.ceil(n / 7) : 1;
}
console.log(solution(7));
console.log(solution(1));
console.log(solution(15));
console.log(solution(21));
