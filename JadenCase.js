// Lv.2 JadenCase 문자열 만들기
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
