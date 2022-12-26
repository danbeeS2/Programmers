function solution(n) {
  let answer = 0;

  // n까지의 짝수 배열 만들기
  const evenSum = (arr) => {
    for (let i = 1; i < n + 1; i++) {
      if (i % 2 === 0) arr.push(i);
    }
  };
  let myArr = [];
  evenSum(myArr);

  // 배열 더하기
  answer = myArr.reduce((pre, cur) => (pre += cur), 0);
  return answer;
}

// function solution(n) {
//   let answer = 0;

//   for (let i = 0; i < n + 1; i++) {
//     if (i % 2 === 0) {
//       answer += i;
//     }
//   }
//   return answer;
// }
