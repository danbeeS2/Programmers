// Lv.1 약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;

  // 약수의 개수를 구하는 함수
  function divisor(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) cnt++;
    }
    // 약수의 개수가 짝수면 1, 홀수면 -1 반환
    return cnt % 2 ? -1 : 1;
  }

  for (let n = left; n <= right; n++) {
    answer += divisor(n) * n;
  }

  return answer;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    // 약수의 개수가 홀수인 수는 "제곱수"밖에 없다
    // 제곱근이 정수면 약수의 개수가 홀수다
    Number.isInteger(Math.sqrt(i)) ? (answer -= i) : (answer += i);
  }
  return answer;
}
