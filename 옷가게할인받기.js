//  10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인
function solution(price) {
  if (price >= 500000) {
    price *= 0.8;
  } else if (price >= 300000) {
    price *= 0.9;
  } else if (price >= 100000) {
    price *= 0.95;
  } else {
    price;
  }
  return Math.floor(price);
}

console.log(solution(150000)); // 142,500
console.log(solution(580000)); // 464,000
