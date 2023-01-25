// Lv.0 로그인 성공?
function solution(id_pw, db) {
  let answer = [];
  for (data of db) {
    if (id_pw[0] === data[0] && id_pw[1] === data[1]) answer = "login";
    if (id_pw[0] === data[0] && id_pw[1] !== data[1]) answer = "wrong pw";
    if (id_pw[0] !== data[0] && id_pw[1] !== data[1]) answer = "fail";
  }
  return answer;
}

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  console.log(map);
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
); // "login"

console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
); // "wrong pw"

console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
); // "fail"
