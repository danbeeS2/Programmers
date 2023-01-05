function solution(num_list, n) {
  let answer = [];
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1, 2, 3],  [4, 5, 6], [7, 8, 9]]
