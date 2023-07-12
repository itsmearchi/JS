function sumNumbers(a, b, c, d, e) {
  let sum = 0;
  const args = [a, b, c, d, e];

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'number') {
      sum += args[i];
    }
  }

  return sum;
}
console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
console.log(sumNumbers(10, "20", 30, null, 40)); // 80
console.log(sumNumbers(0, -5, 10, undefined, 15)); // 20
