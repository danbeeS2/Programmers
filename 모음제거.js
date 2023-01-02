function solution(my_string) {
  return my_string.split(/[aeiou]/g).join("");
}
console.log(solution("bus")); // "bs"
console.log(solution("nice to meet you")); // "nc t mt y"

// function solution(my_string) {
//   return my_string.replace(/[aeiou]/g, '');
// }
