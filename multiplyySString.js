const multiplyString = function (firstNum, secondNum) {
  if (firstNum === "0" || secondNum ==="0") return "0";

  const m = firstNum.length,
    n = secondNum.length,
    res = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
      let sum = res[p2] + Number(firstNum[i]) * Number(secondNum[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
    if (res[0] === 0) res.shift();
    return res.join("");
  }
  
}
  console.log(multiply(1, 3));

