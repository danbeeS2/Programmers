function solution(my_string, num1, num2) {
  let str = [...my_string];
  let tmp = str[num1];
  str[num1] = str[num2];
  str[num2] = tmp;
  return str.join("");
}
console.log(solution("hello", 1, 2)); // "hlelo"
console.log(solution("I love you", 3, 6)); // "I l veoyou"

// function solution(my_string, num1, num2) {
//   let str = [...my_string];
//   [str[num1], str[num2]] = [str[num2], str[num1]];
//   return str.join("");
// }
