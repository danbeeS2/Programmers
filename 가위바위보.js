// 가위는 2, 바위는 0, 보는 5
function solution(rsp) {
  let answer = "";
  rsp
    .split("")
    .map((v) =>
      v === "0"
        ? (answer += "5")
        : v === "2"
        ? (answer += "0")
        : (answer += "2")
    );
  return answer;
}
console.log(solution("2")); // "0"
console.log(solution("205")); // "052"

// function solution(rsp) {
//   let arr = {
//       2: 0,
//       0: 5,
//       5: 2
//   };
//   var answer = [...rsp].map(v => arr[v]).join("");
//   return answer;
// }
