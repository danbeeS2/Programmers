// Lv.0 특이한 정렬
// function solution(numlist, n) {
//   return numlist.sort((a, b) => {
//     if (Math.abs(a - n) === Math.abs(b - n)) return b - a;
//     else return Math.abs(a - n) - Math.abs(b - n);
//   });
// }
console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]

function solution(numlist, n) {
  return numlist
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(a - n) - Math.abs(b - n));
}
