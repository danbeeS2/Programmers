// Lv.1 직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  let b = Number(n[1]);
  const row = "*".repeat(a);
  while (b) {
    console.log(row);
    b--;
  }
});
