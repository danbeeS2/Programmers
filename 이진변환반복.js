// Lv.2  이진 변환 반복하기
function solution(str) {
  let zeroCnt = 0;
  let cnt = 0;

  while (str !== "1") {
    for (s of str) {
      if (s === "0") zeroCnt++;
    }

    str = str.split("0").join("").length.toString(2);
    cnt++;
  }
  return [cnt, zeroCnt];
}

console.log(solution("110010101001")); // 이진 변환 횟수, 제거된 0의 개수 [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]
