const MAPPING = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}
export const toRna = (dna) => dna.split('').map((char) => MAPPING[char]).join('');
