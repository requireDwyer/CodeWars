function maskify(cc) {
  const ccArray = [...cc];
  let count = 0;
  for (let i = ccArray.length - 1; i >= 0; i--) {
    count++;
    if (count > 4) {
      ccArray[i] = "#";
    }
  }
  return ccArray.join("");
}
