// Lv.1 이상한 문자 만들기
// 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자

function solution(str) {
  return str
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((v, idx) => (idx % 2 === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
    )
    .join(" ");
}

function solution(s) {
  let ans = "";
  s = s.toUpperCase().split(" ");
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      ans += j % 2 === 1 ? s[i][j].toLowerCase() : s[i][j];
    }
    if (i < s.length - 1) ans += " ";
  }
  return ans;
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
console.log(solution("tryi hello world")); // "TrYi HeLlO WoRlD"
