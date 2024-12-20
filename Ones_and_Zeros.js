function binaryArrayToNumber(arr) {
    let result = 0;
    let power = arr.length - 1;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        result += Math.pow(2, power);
      }
      power--;
    }
  
    return result;
  }