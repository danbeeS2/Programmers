function solution(numbers, k) {
  const targetLength = 2 * k - 1;

  while (numbers.length < targetLength) {
    numbers = numbers.concat(numbers);
  }
  return numbers[targetLength - 1];
}

console.log(solution([1, 2, 3, 4], 10));

function solution2(numbers, k) {
  return numbers[((2 * k - 1) % numbers.length) - 1];
}
// 1 % 4 => 1
// 5 % 4 => 1
