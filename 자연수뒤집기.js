// Lv.1 자연수 뒤집어 배열로 만들기
function solution(n) {
  return (n + "")
    .split("")
    .map((v) => +v)
    .reverse();
}
console.log(solution(12345)); //	[5,4,3,2,1]
