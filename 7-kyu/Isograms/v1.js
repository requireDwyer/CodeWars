function isIsogram(str) {
  const seenLetters = {};
  for (let i = 0; i < str.length; i++) {
    letter = str[i].toLowerCase();
    if (letter in seenLetters) {
      return false;
    } else {
      seenLetters[letter] = true;
    }
  }
  return true;
}
