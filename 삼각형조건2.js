// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
function solution(sides) {
  let answer = [];
  const max = Math.max(...sides);

  // x가 가장 긴 변인 경우 (max보다 크고 sides를 더한 것보다 작아야함)
  for (let x = max + 1; x < sides[0] + sides[1]; x++) {
    answer.push(x);
  }

  // max가 가장 긴 변인 경우 (sides를 뺀 것보다 크고 max보다 작거나 같야야 함)
  for (let x = Math.abs(sides[0] - sides[1]) + 1; x <= max; x++) {
    answer.push(x);
  }

  return answer.length;
}
console.log(solution([1, 2])); // 1
// x가 가장 긴  변 :  1 + 2 = (1보다 크고) 3보다 작아야함 x=2
console.log(solution([3, 6])); // 5
// x가 가장 긴  변 : 3 + 6 = (6보다 크고) 9보다 작아야함 x=7 8
// 6이 가장 긴 변 : 6 - 3 = 3보다 크고 6보다 작거나 같야야 함  x=4 5 6
console.log(solution([11, 7])); // 13
// x가 가장 긴  변 : 11 + 7 = (11보다 크고) 18보다 작아야함 x=12 13 14 15 16 17
// 11 이 가장 긴 변 : 11 - 7 = 4보다 크고 11보다 작거나 같야야 함  x= 5 6 7 8 9 10 11
