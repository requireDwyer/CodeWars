function longest(s1, s2) {
  const uniqueLetters = {};
  for (const letter of s1) {
    console.log(letter);
    if (!(letter in uniqueLetters)) uniqueLetters[letter] = true;
  }
  for (const letter of s2) {
    if (!(letter in uniqueLetters)) uniqueLetters[letter] = true;
  }
  let distinctLetterString = "";
  for (const letter in uniqueLetters) {
    distinctLetterString += letter;
  }
  return [...distinctLetterString].sort().join("");
}
