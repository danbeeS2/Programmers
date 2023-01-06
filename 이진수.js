function solution(bin1, bin2) {
  // 2진수를 10진수로 변환
  bin1 = parseInt(bin1, 2);
  bin2 = parseInt(bin2, 2);

  // 10진수를 2진수로 변환
  return (bin1 + bin2).toString(2);
}
console.log(solution("10", "11")); // "101"
console.log(solution("1001", "1111")); // "11000"
