function highAndLow(numbers) {
  let biggestNumber = -Infinity;
  let smallestNumber = Infinity;
  numbers.split(" ").forEach((stringNumber) => {
    const number = Number(stringNumber);
    if (number > biggestNumber) biggestNumber = number;
    if (number < smallestNumber) smallestNumber = number;
  });
  return `${biggestNumber} ${smallestNumber}`;
}

console.log(highAndLow("42"));
console.log("42".split(" "));
