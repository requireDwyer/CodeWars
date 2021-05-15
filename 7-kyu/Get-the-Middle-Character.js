function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);
  let middleString;
  if (s.length % 2 === 0) {
    middleString = `${s[middleIndex - 1]}${s[middleIndex]}`;
  } else {
    middleString = s[middleIndex];
  }
  return middleString;
}
