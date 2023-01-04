function solution(my_string) {
  let answer = my_string
    .replace(/[a-z]/g, "")
    .split("")
    .map((v) => +v);
  return answer.sort((a, b) => a - b);
}

console.log(solution("hi12392")); //	[1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); //	[2, 2, 4, 8]
console.log(solution("abcde0")); // [0]

// function solution(my_string) {
//   return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
// }
