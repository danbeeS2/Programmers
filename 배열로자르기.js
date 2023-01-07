function solution(my_str, n) {
  let answer = [];
  my_str = [...my_str];

  while (my_str.length) {
    answer.push(my_str.splice(0, n).join(""));
  }

  return answer;
}
console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"];
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"];
