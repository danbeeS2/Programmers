function solution(array, n) {
  let answer = [];
  const subArr = [...array].map((el) => Math.abs(el - n));
  const min = Math.min(...subArr);

  for (let i = 0; i < subArr.length; i++) {
    if (subArr[i] === min) {
      answer.push(array[i]);
    }
  }
  return Math.min(...answer);
}
console.log(solution([3, 10, 28], 20)); // [-17, -10, 8] 28
console.log(solution([10, 11, 14, 12], 13)); // [-3, -2, 1] 12

// function solution(array, n) {
//   return array.reduce((a, c) =>
//     Math.abs(a - n) < Math.abs(c - n)
//       ? a
//       : Math.abs(a - n) === Math.abs(c - n)
//       ? Math.min(a, c)
//       : c
//   );
// }
