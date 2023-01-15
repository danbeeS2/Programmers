// Lv.1 가운데 글자 가져오기
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
console.log(solution("abcde")); //	"c"
console.log(solution("qwer")); //	"we"
