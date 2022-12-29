function solution(numbers) {
  return (
    numbers.reduce((pre, cur) => (pre += cur), 0) / numbers.length
  ).toFixed(1);
}
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
