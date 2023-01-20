// Lv.1 음양 더하기
function solution(abs, sign) {
  let answer = 0;
  for (let i = 0; i < abs.length; i++) {
    sign[i] ? (answer += abs[i]) : (answer -= abs[i]);
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0

function solution(abs, sign) {
  return abs.reduce((pre, cur, idx) => pre + cur * (sign[idx] ? 1 : -1), 0);
}
