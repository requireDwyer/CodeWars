function XO(str) {
  const xoCount = { x: 0, o: 0 };
  for (const letter of str) {
    const letterLowerCase = letter.toLowerCase();
    if (letterLowerCase === "x" || letterLowerCase === "o") {
      xoCount[letterLowerCase] += 1;
    }
  }
  return xoCount["x"] === xoCount["o"] ? true : false;
}
