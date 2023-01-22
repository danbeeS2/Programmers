// Lv.1 핸드폰 번호 가리기
function solution(phone) {
  let answer = phone.split("");
  answer.splice(0, phone.length - 4, "*".repeat(phone.length - 4));
  return answer.join("");
}
console.log(solution("01033334444")); // 	"*******4444"
console.log(solution("027778888")); // 	"*****8888"
console.log(solution("8888"));

// function solution(s) {
//   return (result = "*".repeat(s.length - 4) + s.slice(-4));
// }
