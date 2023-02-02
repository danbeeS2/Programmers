// Lv.1 없는 숫자 더하기
function solution(numbers) {
  let answer = 45;
  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); //	6
