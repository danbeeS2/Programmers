function solution(num_list) {
  let even = 0;
  for (let num of num_list) {
    if (num % 2 === 0) even++;
  }
  return [even, num_list.length - even];
}

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]
