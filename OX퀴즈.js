// function solution(quiz) {
//   let answer = [];
//   for (q of quiz) {
//     let quizArr = q.split(" ");
//     if (quizArr[1] === "+") {
//       +quizArr[0] + +quizArr[2] === +quizArr[4]
//         ? answer.push("O")
//         : answer.push("X");
//     } else {
//       +quizArr[0] - +quizArr[2] === +quizArr[4]
//         ? answer.push("O")
//         : answer.push("X");
//     }
//   }
//   return answer;
// }

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); // ["O", "O", "X", "O"]

// function solution(quiz) {
//   return quiz
//     .map((el) => el.split(" = "))
//     .map((el) => {
//       return eval(el[0]) == el[1] ? "O" : "X";
//     });
// }
// eval()은 문자로 표현된 JavaScript 코드를 실행하는 함수
// eval() 사용시 해커가 위험한 코드를 사용할 수 있으므로 절대 사용하지 말 것!

// function solution(quiz) {
//   return quiz.map((t) => {
//     const [calc, result] = t.split(" = ");
//     const sign = calc.includes("+") ? 1 : -1;
//     const [a, b] = calc.split(sign === 1 ? " + " : " - ");

//     return +a + +b * sign === +result ? "O" : "X";
//   });
// }
