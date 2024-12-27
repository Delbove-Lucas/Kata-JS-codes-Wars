function lookAndSayAndSum(n) {
    let num = "1";
    
    for (let i = 1; i < n; i++) {
      let nextNum = "";
      let count = 1;
      
      for (let j = 1; j < num.length; j++) {
        if (num[j] === num[j - 1]) {
          count++;
        } else {
          nextNum += count + num[j - 1];
          count = 1;
        }
      }
      nextNum += count + num[num.length - 1];
      num = nextNum;
    }
    
    return num.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  