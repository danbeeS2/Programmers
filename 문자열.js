//  Lv.1 문자열 다루기 기본
function solution(s) {
  return (s.length == 4 || s.length == 6) && parseInt(s);
}

console.log(solution("a234")); //	false
console.log(solution("1234")); //	true

function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}
// (정규표현식).test("문자열") : "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환
// ^ : 시작
// [0-9] : 0~9까지의 숫자
// + : 반복, 앞의 문자가 1개 이상인 경우
// $ : 종료
