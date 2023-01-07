function solution(str) {
  str = str.split("");
  let ans = [];
  let obj = {};

  // 문장한 횟수를 저장한 객체 만들기
  for (s of str) {
    s in obj ? obj[s]++ : (obj[s] = 1);
  }

  // 한번만 등장한 문자 찾기
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      ans.push(key);
    }
  }
  // 사전순으로 정렬
  return ans.sort().join("");
}

console.log(solution("abcabcadc")); //	"d"
console.log(solution("abdc")); //	"abcd"
console.log(solution("hello")); //	"eho"

// function solution(s) {
//   let res = [];
//   for (let c of s) {
//     if (s.indexOf(c) === s.lastIndexOf(c)) {
//       res.push(c);
//     }
//   }
//   return res.sort().join("");
// }
