// 한 마리당 쿠폰을 한 장 발급, 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 최대 서비스 치킨의 수를 return
function solution(chicken) {
  let ans = Math.floor(chicken / 10);
  let cupon = Math.floor(chicken / 10) + (chicken % 10);

  while (cupon >= 10) {
    ans += Math.floor(cupon / 10);
    cupon = Math.floor(cupon / 10) + Math.floor(cupon % 10);
  }

  return ans;
}

function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer += parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}

console.log(solution(100)); // 11
console.log(solution(1081)); // 120
// 1081 => 108개 서비스, 쿠폰 108개 => 10개 서비스, 10개 쿠폰 => 1개 서비스
