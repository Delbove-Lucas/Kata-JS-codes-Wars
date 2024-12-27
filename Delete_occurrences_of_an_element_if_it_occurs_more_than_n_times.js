function deleteNth(lst, N) {
    const result = [];
    
    for (let i = 0; i < lst.length; i++) {
      let count = 0;
      
      for (let j = 0; j < result.length; j++) {
        if (result[j] === lst[i]) {
          count++;
        }
      }
  
      if (count < N) {
        result.push(lst[i]);
      }
    }
  
    return result;
  }
  
  let lst1 = [1, 2, 3, 1, 2, 1, 2, 3];
  let N1 = 2;
  console.log(deleteNth(lst1, N1));
  
  let lst2 = [20, 37, 20, 21];
  let N2 = 1;
  console.log(deleteNth(lst2, N2));
  