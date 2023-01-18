// Lv.0 직사각형 넓이 구하기
function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);

  const width = Math.abs(dots[0][0] - dots[2][0]);
  const height = Math.abs(dots[0][1] - dots[1][1]);

  return width * height;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); // 1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); //	4
