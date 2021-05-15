function descendingOrder(n) {
  return Number([...`${n}`].sort((a, b) => b - a).join(""));
}
