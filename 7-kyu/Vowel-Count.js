function getCount(str) {
  let vowelCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] in vowels) vowelCount++;
  }
  return vowelCount;
}

console.log(getCount("abracadabra"), 5);
