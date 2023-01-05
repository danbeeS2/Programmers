function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

console.log(solution("Bcad")); // "abcd"
console.log(solution("heLLo")); // "ehllo"
console.log(solution("Python")); // "hnopty"

console.log([..."Bcad"]); // [ 'B', 'c', 'a', 'd' ]
console.log([..."12345"]);
["1", "2", "3", "4", "5"];
