function solution(array, height) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([149, 180, 192, 170], 167)); // 3
console.log(solution([180, 120, 140], 190)); // 0
