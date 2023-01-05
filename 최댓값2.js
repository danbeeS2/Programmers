function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const positive = numbers[0] * numbers[1];
  const negative = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  return positive > negative ? positive : negative;
}
console.log(solution([1, 2, -3, 4, -5])); // 	15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600

// function solution(numbers) {
//   numbers.sort((a, b) => a - b);
//   return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
// }
