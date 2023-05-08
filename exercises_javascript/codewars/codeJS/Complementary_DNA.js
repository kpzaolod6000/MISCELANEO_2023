function DNAStrand(dna){
  //your code here
  let com_dna = "";
  for(let i=0 ; i<dna.length ; i++){
    
    switch (dna[i]) {
        case 'A':
            com_dna += 'T';
            break;
        case 'T':
            com_dna += 'A';
            break;
        case 'C':
            com_dna += 'G';
            break;
        case 'G':
            com_dna += 'C';
            break;
        default:
            break;
    }
  }
  return com_dna;   
}

console.log(DNAStrand("AAAA"));

/***hermosa solucion csmr*/

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}