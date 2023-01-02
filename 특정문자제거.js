function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"

// 정규표현식 사용
function solution(my_string, letter) {
  let reg = new RegExp(letter, "g"); // g: 전역 검색
  return my_string.replace(reg, "");
}
