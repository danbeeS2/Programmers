// Lv.1 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]

// map의 인자도 map 가능
function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
