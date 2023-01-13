// Lv.1 두 정수 사이의 합
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

//  가우스의 합 (등차수열의 합)
//  n * ( a + b ) / 2
// n = a와 b 사이의 정수 개수 : b - a + 1
// 1부터 100까지를 더한다면 그에 역순인 100부터 1까지를 순서대로 더하고(1+100, 2+99, 3+98, 4+97,5+96...)
// 그럼 각각 더한 101이란 숫자가 100개, 그 합은 10100
// 실제 더하려고 하던 수에서 추가로 역순인 수가 한번 더 추가된 꼴이니 10100의 값에 나누기 2

function solution(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(solution(3, 5)); // 12 (3+4+5)
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12 (3+4+5)
