// Lv.1 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}
console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
