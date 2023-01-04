function solution(box, n) {
  let dice = box.map((el) => Math.floor(el / n));
  return dice.reduce((pre, cur) => (pre *= cur), 1);
}
console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); // 12
