function maskify(cc) {
  const ccArray = [...cc];
  for (let i = 0; i < ccArray.length - 4; i++) {
    ccArray[i] = "#";
  }
  return ccArray.join("");
}
