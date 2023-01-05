function solution(num, k) {
  let answer = (num + "").indexOf(k);
  answer >= 0 ? answer++ : answer;
  return answer;
}

console.log(solution(29183, 1)); //	3
console.log(solution(23244, 4)); //	4
console.log(solution(123456, 7)); // -1
