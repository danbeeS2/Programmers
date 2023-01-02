// 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판

function solution(n) {
  let pizza = 1;
  while (pizza) {
    const pieces = pizza * 6;
    if (pieces % n === 0) break;
    pizza++;
  }

  // for (let pizza = 1; pizza < 30000; pizza++) {
  //   const pieces = pizza * 6;
  //   if (pieces % n === 0) return pizza;
  // }

  return pizza;
}

console.log(solution(10)); // 5판
console.log(solution(6)); // 1판
console.log(solution(4)); // 2판 2*6 = 12

// 1 2 3 6
// 5 30
