function solution(s1, s2) {
  let cnt = 0;
  s1.filter((el) => isSame(el));

  function isSame(str) {
    for (s of s2) {
      s === str ? cnt++ : 0;
    }
    return cnt;
  }

  return cnt;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
console.log(solution(["n", "omg"], ["m", "dot"])); // 0

// function solution(s1, s2) {
//   const intersection = s1.filter((x) => s2.includes(x));
//   return intersection.length;
// }
