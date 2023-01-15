// Lv.1 내적
function solution(a, b) {
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    ans += a[i] * b[i];
  }
  return ans;
}
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); //	-2

function solution(a, b) {
  return a.reduce((pre, cur, i) => pre + cur * b[i], 0);
}
