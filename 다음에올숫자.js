// Lv.0 다음에 올 숫자
function solution(common) {
  return common[1] - common[0] === common[2] - common[1]
    ? common[1] - common[0] + common.at(-1)
    : (common[1] / common[0]) * common.at(-1);
}

console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
