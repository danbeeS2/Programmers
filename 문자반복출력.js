function solution(my_string, n) {
  let answer = "";
  const alphas = my_string.split("");
  for (alpha of alphas) {
    answer += alpha.repeat(n);
  }
  return answer;
}

console.log(solution("hello", 3));

let str = "hello";
for (s of str) {
  console.log(s.repeat(2));
}
