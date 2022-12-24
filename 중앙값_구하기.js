function solution(array) {
  let answer = 0;
  const middleIdx = Math.floor(array.length / 2);
  const sortArr = array.sort((a, b) => a - b);

  answer = sortArr[middleIdx];

  return answer;
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);
