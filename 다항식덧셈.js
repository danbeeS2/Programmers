// Lv.0 다항식 더하기
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  let xNum = 0;
  let num = 0;

  arr.forEach((n) => {
    if (n.includes("x")) {
      const x = n.replace("x", "") || "1";
      xNum += +x;
    } else {
      num += +n;
    }
  });

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}

console.log(solution("3x + 7 + x")); // "4x + 7"
console.log(solution("x + x + x")); // "3x"
