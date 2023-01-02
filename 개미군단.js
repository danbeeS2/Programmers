// 공격력 : 장군개미 = 5, 병정개미 = 3, 일 개미 = 1
function solution(hp) {
  let ant = 0;
  while (hp) {
    if (hp / 5 > 0) {
      ant += Math.floor(hp / 5);
      hp = hp % 5;
    }

    if (hp / 3 > 0) {
      ant += Math.floor(hp / 3);
      hp = hp % 3;
    }

    if (hp < 3) {
      ant += hp;
      hp = 0;
    }
  }
  return ant;
}

console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201
