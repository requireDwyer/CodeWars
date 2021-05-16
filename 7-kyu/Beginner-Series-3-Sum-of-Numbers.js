function getSum(a, b) {
  if (a === b) return a;
  const min = a < b ? a : b;
  const max = a > b ? a : b;
  let sum = 0;
  for (let number = min; number <= max; number++) {
    sum += number;
  }
  return sum;
}
