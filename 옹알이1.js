// Lv.0 옹알이 (1)
// "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
function solution(babbling) {
  let answer = 0;
  for (word of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }
  return answer;
}
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); //	1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); //	3

function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
