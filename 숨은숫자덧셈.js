function solution(my_string) {
  const num = my_string.match(/\d/g);
  return num.map((v) => +v).reduce((a, b) => (a += b), 0);
}
console.log(solution("aAb1B2cC34oOp")); // 10
console.log(solution("1a2b3c4d123")); // 16

// function solution(my_string) {
//   return my_string.match(/\d/g).reduce((acc, cur) => acc + Number(cur), 0);
// }
