function solution(my_string) {
  let str = my_string.split("");
  return str.reverse().join("");
}
console.log(solution("jaron")); // "noraj"
console.log(solution("bread")); // "daerb"
