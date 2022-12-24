// 1 예각 : 0 < angle < 90
// 2 직각 : angle = 90
// 3 둔각 : 90 < angle < 180
// 4 평각 : angle = 180

function solution(angle) {
  if (angle < 91) {
    return angle === 90 ? 2 : 1;
  } else {
    return angle === 180 ? 4 : 3;
  }
}
