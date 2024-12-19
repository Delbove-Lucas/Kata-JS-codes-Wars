String.prototype.toJadenCase = function () {
    let words = this.split(" "); 
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1); 
    }
    return words.join(" "); 
    };
  
  let phrase = "How can mirrors be real if our eyes aren't real";
  let resultat = phrase.toJadenCase(); 
  console.log(resultat); 