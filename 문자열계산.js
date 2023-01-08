// function solution(my_string) {
//   return eval(my_string);
// }
console.log(solution("3 + 4")); //	7

function solution(my_string) {
  let arr = my_string.split(" ");
  let answer = +arr[0];
  arr.forEach((item, idx) => {
    if (item === "+") answer += +arr[idx + 1];
    if (item === "-") answer -= +arr[idx + 1];
  });
  return answer;
}
