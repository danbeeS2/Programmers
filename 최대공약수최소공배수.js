// Lv.1 최대공약수와 최소공배수
function solution(n, m) {
  let answer = [];

  // 최대공약수 : n, m의 공약수 -> Math.max()
  let tmp = [];
  for (let i = 1; i < Math.max(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      tmp.push(i);
    }
  }
  answer.push(Math.max(...tmp));

  // n * m  = 최대공약수 * 최소공배수
  // 최소공배수 : n * m / 최대공약수
  answer.push((n * m) / answer[0]);
  return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
