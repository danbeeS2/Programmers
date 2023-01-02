// a-z: 아스키코드 97~122
// A-Z: 아스키코드 65~90
function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    my_string.charCodeAt(i) < 91
      ? (answer += my_string[i].toLowerCase())
      : (answer += my_string[i].toUpperCase());
  }
  return answer;
}

console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); // "ABcDeFGHij"

// function solution(my_string) {
//   var answer = '';
//   for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
//   return answer;
// }
