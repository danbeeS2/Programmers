function solution(cipher, code) {
  let answer = "";
  for (let i = 1; i <= Math.floor(cipher.length / code); i++) {
    answer += cipher[code * i - 1];
  }
  return answer;
}
console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"
console.log(solution("pfqallllabwaoclk", 2)); //	"fallback""

// function solution(cipher, code) {
//   var answer = "";
//   for (let i = code - 1; i < cipher.length; i += code) {
//     answer += cipher[i];
//   }
//   return answer;
// }
