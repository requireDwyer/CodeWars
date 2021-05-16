function DNAStrand(dna) {
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const complementDNA = [...dna].map((letter) => complements[letter]).join("");
  return complementDNA;
}
