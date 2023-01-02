// 아이스 아메리카노 한잔 : 5,500원
// 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열
function solution(money) {
  const cup = Math.floor(money / 5500);
  const changes = money - cup * 5500;
  return [cup, changes];
}
console.log(solution(5500)); // [1,0]
console.log(solution(15000)); // [2,4000]
