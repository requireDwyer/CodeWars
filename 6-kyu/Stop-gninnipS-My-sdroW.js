function spinWords(string) {
  const words = string.split(" ");
  for (let i = 0; i, i < words.length; i++) {
    if (words[i].length >= 5) words[i] = [...words[i]].reverse().join("");
  }
  return words.join(" ");
}
