function solution(order) {
  let answer = 0;
  let numArr = ("" + order).split("");
  numArr.map((el) =>
    (el === "3") | (el === "6") | (el === "9") ? answer++ : null
  );
  return answer;
}

// filter 사용
// function solution(order) {
//   return order
//     .toString()
//     .split("")
//     .filter((n) => ["3", "6", "9"].includes(n));
// }

// 정규표현식 사용
// function solution(order) {
//   var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//   return answer;
// }

// function solution(order) {
//   return ("" + order).split(/[369]/).length - 1;
// }

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
console.log(solution(39)); // 2
