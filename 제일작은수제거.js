//  Lv.1 제일 작은 수 제거하기
function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((v) => v !== min);
  return answer.length === 0 ? [-1] : answer;
}
console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]

// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)), 1);
//   return arr.length === 0 ? [-1] : arr;
// }
