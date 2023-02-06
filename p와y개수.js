// Lv.1 문자열 내 p와 y의 개수
function solution(str) {
  str = str.toLowerCase().split("");
  let obj = {};

  // 등장한 횟수를 저장하는 객체 만들기
  for (s of str) {
    s in obj ? obj[s]++ : (obj[s] = 1);
  }

  return obj.p === obj.y ? true : false;
}
console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false

// function solution(s) {
//   return (
//     s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
//   );
// }
