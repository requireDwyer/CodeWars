function arrayDiff(a, b) {
  const bNumbers = {};
  for (const number of b) {
    bNumbers[number] = true;
  }
  return a.filter((number) => {
    if (!(number in bNumbers)) return number;
  });
}
