// // Lv.1 x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, idx) => v * (idx + 1));
}

console.log(solution(2, 5)); // [2,4,6,8,10]
console.log(solution(4, 3)); // [4,8,12]
console.log(solution(-4, 2)); // [-4, -8]
console.log(solution(0, 5)); // [-4, -8]
