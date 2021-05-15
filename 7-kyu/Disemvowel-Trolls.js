function disemvowel(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  return [...str]
    .filter((letter) => (letter.toLowerCase() in vowels ? "" : letter))
    .join("");
}
