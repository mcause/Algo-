// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.


function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let rna = "";
    for (let i = 0; i < dna.length; i++){
      if(dna[i]  === 'T'){
        rna += "U";
      } else {
        rna += dna[i];
      }
    }
    return rna 
  }

 //OR 

return dna.split('T').join('U');
