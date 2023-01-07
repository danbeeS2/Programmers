function solution(numbers) {
  const engNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let ans;
  for (let i = 0; i < engNum.length; i++) {
    numbers = numbers.split(engNum[i]).join(i);
  }
  return +numbers;
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067

// function solution(numbers) {
//   const obj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   const num = numbers.replace(
//     /zero|one|two|three|four|five|six|seven|eight|nine/g,
//     (v) => {
//       return obj[v];
//     }
//   );

//   return Number(num);
// }
