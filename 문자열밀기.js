function solution(A, B) {
  return (B + B).indexOf(A);
}
console.log(solution("hello", "ohell")); // 1
console.log(solution("apple", "elppa")); // -1
console.log(solution("atat", "tata")); // 1
console.log(solution("abc", "abc")); // 0
