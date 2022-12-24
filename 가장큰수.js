function solution(array) {
  let answer = [];
  const maxNum = Math.max.apply(null, array);
  const maxIdx = array.indexOf(maxNum);

  answer.push(maxNum, maxIdx);

  return answer;
}

solution([1, 8, 3]); // [8, 1]
solution([9, 10, 11, 8]); // [11, 2]
