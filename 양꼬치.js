function solution(n, k) {
  let price = n * 12000 + (k - Math.floor(n / 10)) * 2000;
  return price;
}
console.log(solution(10, 3));
console.log(solution(64, 6));
