function solution(a, b, k) {
  let cnt = 0;
  let arr = [];

  // 배열 만들기
  for (let n = a; n <= b; n++) {
    arr.push(("" + n).split(""));
  }

  // 배열 안의 원소에 'k'가 있는지 확인
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      arr[i].includes("" + k) ? cnt++ : 0;
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j].includes("" + k) ? cnt++ : 0;
      }
    }
  }
  return cnt;
}
console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0

// function solution(i, j, k) {
//   let a = "";
//   for (i; i <= j; i++) {
//     a += i;
//   }

//   return a.split(k).length - 1;
// }
