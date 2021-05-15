function findShort(s) {
  let shortestWordLength = Infinity;
  s.split(" ").forEach((word) => {
    if (word.length < shortestWordLength) shortestWordLength = word.length;
  });
  return shortestWordLength;
}
