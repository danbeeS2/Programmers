// Lv.2 최솟값 만들기

function solution(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => b - a);

  return arr1.reduce((pre, cur, i) => (pre += cur * arr2[i]), 0);
}
console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
