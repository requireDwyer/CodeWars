function accum(s) {
  let mumbledString = "";
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let dash = `${i > 0 ? "-" : ""}`;
    mumbledString += `${dash}${letter.toUpperCase()}${letter
      .toLowerCase()
      .repeat(i)}`;
  }
  return mumbledString;
}
