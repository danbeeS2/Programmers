function solution(array) {
  return array.join("").split("7").length - 1;
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
