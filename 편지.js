// 한 자 한 자를 가로 2cm 크기로 적기 위해 필요한 편지지의 최소 가로길이
function solution(message) {
  return message.split("").length * 2;
}
console.log(solution("happy birthday!")); // 30
console.log(solution("I love you~")); // 22
