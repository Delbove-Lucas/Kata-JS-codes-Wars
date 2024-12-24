function findShort(str) {
    return Math.min(...str.split(' ').map(word => word.length));
  }