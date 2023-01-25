// Lv.1 예산
function solution(depart, budget) {
  let cnt = 0;
  depart = depart.sort((a, b) => a - b);

  for (d of depart) {
    budget -= d;
    if (budget >= 0) cnt++;
  }

  return cnt;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
