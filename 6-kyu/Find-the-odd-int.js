function findOdd(array) {
  const numberCount = {};
  array.forEach((number) => {
    number in numberCount
      ? (numberCount[number] += 1)
      : (numberCount[number] = 1);
  });
  for (const number in numberCount) {
    if (numberCount[number] % 2 !== 0) return Number(number);
  }
}
