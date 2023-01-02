function solution(n, numlist) {
  let answer = [];
  for (num of numlist) {
    num % n === 0 ? answer.push(num) : 0;
  }
  return answer;
}
console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
console.log(solution(5, [1, 9, 3, 10, 13, 5])); // [10, 5]
console.log(solution(12, [2, 100, 120, 600, 12, 12])); // [120, 600, 12, 12]

// function solution(n, numlist) {
//   return numlist.filter((el) => el % n === 0);
// }

// function solution(n, numlist) {
//   return numlist.filter(num => !(num % n));
// }
