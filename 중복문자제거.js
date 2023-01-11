function solution(my_string) {
  let answer = "";
  let obj = {};

  for (str of my_string) {
    str in obj ? null : (obj[str] = 1);
  }

  for (const [key] of Object.keys(obj)) {
    answer += key;
  }

  return answer;
}

console.log(solution("people")); // "peol"
console.log(solution("We are the world")); // "We arthwold"

// function solution(my_string) {
//   return [...new Set(my_string)].join('');
// }

// Array.from()메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만든다.
// function solution(my_string) {
//   let s = new Set(Array.from(my_string));
//   return [...s.values()].join("");
// }
