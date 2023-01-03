function solution(strlist) {
  let answer = [];
  // for (let i = 0; i < strlist.length; i++) {
  //   answer.push(strlist[i].length);
  // }
  for (str of strlist) answer.push(str.length);
  return answer;
}

console.log(solution(["We", "are", "the", "world!"])); // [ 2, 3, 3, 6 ]
console.log(solution(["I", "Love", "Programmers."])); // [1, 4, 12]
