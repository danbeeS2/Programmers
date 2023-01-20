function solution(spell, dic) {
  let cnt = 0;
  for (word of dic) {
    if (word.length === spell.length) {
      cnt = 0;
      for (s of spell) {
        if (word.includes(s)) cnt++;
      }
    }
  }
  return cnt === spell.length ? 1 : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); // 2

function solution(spell, dic) {
  // 1. spell을 오름차순 정렬해서 하나의 단어로 만든다.
  spell = spell.sort().join("");
  // 2. map()을 이용해서 dic 배열을 순회,
  // dic의 단어를 오름차순으로 정렬한 단어로 다시 만든 후에
  // find()를 이용하여 spell과 일치하는 단어를 찾는다.
  dic = dic.map((a) => a.split("").sort().join("")).find((e) => e === spell);

  // 3. 일치하는 단어가 있다면 (undefined가 아니라면) 1을 리턴,
  // 일치하는 단어가 없다면(undefined)라면 2를 리턴한다.
  return dic !== undefined ? 1 : 2;
}
