// a-z 아스키코드 : 97 ~ 122
// a는 0, b는 1, c는 2, ..., j는 9
// 해당 숫자를 하나씩 받아서 97를 더한 다음 아스키코드를 문자로 변환

function solution(age) {
  let str = "";

  age = age
    .toString()
    .split("")
    .map((v) => +v);

  age.filter((el) => (str += String.fromCodePoint(el + 97)));

  return str;
}
console.log(solution(23)); // "cd"
console.log(solution(52)); // "fb"
console.log(solution(100)); // "baa"

// 문자열 자체도 인덱스가 있으니 바로 [v] 가능
// function solution(age) {
//   return age
//     .toString()
//     .split("")
//     .map((v) => "abcdefghij"[v])
//     .join("");
// }
