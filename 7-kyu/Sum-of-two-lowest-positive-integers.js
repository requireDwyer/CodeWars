function sumTwoSmallestNumbers(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  numbers.forEach((number) => {
    if (number < smallest) {
      secondSmallest = smallest;
      smallest = number;
    } else if (number < secondSmallest) {
      secondSmallest = number;
    }
  });
  return smallest + secondSmallest;
}
