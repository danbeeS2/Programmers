// Lv.0 연속된 수의 합
function solution(num, total) {
  let answer = [];
  let min = Math.ceil(total / num - Math.floor(num / 2));
  for (let i = 0; i < num; i++) {
    answer.push(min);
    min++;
  }
  return answer;
}
console.log(solution(3, 12)); // [3, 4, 5]
console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
console.log(solution(4, 14)); // [2, 3, 4, 5]
console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]
