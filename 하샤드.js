// Lv.1 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
function solution(x) {
  const sum = (x + "").split("").reduce((pre, cur) => pre + +cur, 0);
  return x % sum === 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false

// !1 === !true ==== false ;
// !0 === !false ==== true ;
function solution(x) {
  return !(x % (x + "").split("").reduce((pre, cur) => pre + +cur, 0));
}
