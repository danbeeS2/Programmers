function solution(my_string) {
  return my_string.split(/[a-z]/gi).reduce((pre, cur) => pre + Number(cur), 0);
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
