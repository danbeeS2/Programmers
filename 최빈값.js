function solution(array) {
  let answer = 0;
  let obj = {};
  // for (item of array) {
  //   if (!obj[item]) {
  //     obj[item] = 1;
  //   } else {
  //     obj[item] += 1;
  //   }
  // }

  let max = -Infinity;
  let blank = [];

  array.forEach((el) => {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  });

  for (const [key, value] of Object.entries(obj)) {
    if (max < value) {
      max = value;
      blank = [key];
    } else if (max === value) {
      blank.push(key);
    }
  }

  return blank.length > 1 ? -1 : Number(blank[0]);
}

console.log(solution([1, 2, 3, 3, 3, 4, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
