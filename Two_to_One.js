function longest(s1, s2) {
    let combined = s1 + s2;
    let uniqueLetters = '';

    for (let i = 0; i < combined.length; i++) {
        if (uniqueLetters.indexOf(combined[i]) === -1) {
            uniqueLetters += combined[i];
        }
    }

    let sortedLetters = uniqueLetters.split('').sort().join('');
    return sortedLetters;
}