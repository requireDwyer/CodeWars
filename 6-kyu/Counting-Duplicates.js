function duplicateCount(text) {
  const charCount = {};
  for (let char of text) {
    char = char.toLowerCase();
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  let sumOfDuplicate = 0;
  for (const char in charCount) {
    if (charCount[char] > 1) sumOfDuplicate += 1;
  }
  return sumOfDuplicate;
}
