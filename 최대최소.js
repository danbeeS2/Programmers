// Lv.2 최댓값과 최솟값
function solution(s) {
  s = s.split(" ").map((v) => +v);
  return [Math.min(...s), Math.max(...s)].join(" ");
}

function solution(s) {
  s = s.split(" ");
  return `${Math.min(...s)} ${Math.max(...s)}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
