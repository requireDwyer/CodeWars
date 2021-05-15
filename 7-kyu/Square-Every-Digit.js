function squareDigits(num) {
  let squaredNumbers = "";
  const numberString = String(num);
  for (let i = 0; i < numberString.length; i++) {
    squaredNumbers += Number(numberString[i]) ** 2;
  }
  return Number(squaredNumbers);
}
