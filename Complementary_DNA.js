function DNAStrand(str) {
    return str.split('').map(base => {
      if (base === 'A') return 'T';
      if (base === 'T') return 'A';
      if (base === 'C') return 'G';
      if (base === 'G') return 'C';
    }).join('');
  }
  