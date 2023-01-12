function solution(before, after) {
  let ans = 1;

  before = before.split("").sort();
  after = after.split("").sort();

  for (let i = 0; i < before.length; i++) {
    if (before[i] !== after[i]) {
      ans = 0;
      break;
    }
  }

  return ans;
}
console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0

// function solution(before, after) {
//   return before.split("").sort().join("") === after.split("").sort().join("")
//     ? 1
//     : 0;
// }
