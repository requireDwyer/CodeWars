String.prototype.toJadenCase = function () {
  const stringArray = [...String(this)];
  stringArray[0] = stringArray[0].toUpperCase();
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === " ") {
      stringArray[i + 1] = stringArray[i + 1].toUpperCase();
    }
  }
  return stringArray.join("");
};
