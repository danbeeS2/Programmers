function solution(n) {
  let num = n
    .toString()
    .split("")
    .map((el) => +el);
  return num.reduce((pre, cur) => (pre += cur), 0);
}
console.log(solution(1234)); // 10
console.log(solution(930211)); // 16

// function solution(n) {
//   return (n+'').split('').map(v=>+v).reduce((a,v)=>a+v,0);
// }
