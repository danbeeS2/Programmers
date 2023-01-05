function solution(n) {
  let answer = 0;

  function isNotPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return true;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (isNotPrime(i)) answer++;
  }
  return answer;
}

console.log(solution(10)); // 5
console.log(solution(15)); // 8
