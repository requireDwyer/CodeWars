function isTriangle(a, b, c) {
  const orderedSides = [a, b, c].sort((x, y) => x - y);
  return orderedSides[0] + orderedSides[1] > orderedSides[2] ? true : false;
}
