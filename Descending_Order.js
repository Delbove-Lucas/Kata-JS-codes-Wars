function descendingOrder(n) {
    let strNumber = n.toString();
    let digits = strNumber.split('');
    digits.sort(function(a, b) {
        return b - a;
    });
    let sortedStr = digits.join('');
    return Number(sortedStr);
}

console.log(descendingOrder(42145));     
console.log(descendingOrder(145263));     
console.log(descendingOrder(123456789));   