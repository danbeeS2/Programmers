// Lv.1 부족한 금액 계산하기
function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  return total > money ? total - money : 0;
}

console.log(solution(3, 20, 4)); // 10
console.log(solution(3, 20, 3)); // 10

// 가우스 합으로 totalCount 구하기
function solution(price, money, count) {
  const totalCount = (count * (1 + count)) / 2;
  const tmp = price * totalCount - money;
  return tmp > 0 ? tmp : 0;
}
