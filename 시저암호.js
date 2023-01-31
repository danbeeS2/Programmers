// Lv.1 시저 암호
function solution(s, n) {
  let answer = "";

  const lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const str = s.split("");

  for (s of str) {
    if (s !== " ") {
      answer +=
        s === s.toUpperCase()
          ? upper[upper.indexOf(s) + n]
          : lower[lower.indexOf(s) + n];
    } else answer += " ";
  }

  return answer;
}
console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"

// indexOf를 쓸거면 굳이 upper, lower을 구분할 필요가 없었다.
function solution(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}
