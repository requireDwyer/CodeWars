function digital_root(number) {
  if (number < 10) return number;
  const numberString = String(number);
  let sum = 0;
  for (const number of numberString) {
    sum += Number(number);
  }
  return digital_root(sum);
}
