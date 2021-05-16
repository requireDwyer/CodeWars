function filter_list(l) {
  const filtered_list = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") filtered_list.push(l[i]);
  }
  return filtered_list;
}
