function positiveSum(arr) {
  const total = arr.reduce((sum, number) => {
    if (number > 0) return sum + number;
    return sum;
  }, 0);
  return total;
}
