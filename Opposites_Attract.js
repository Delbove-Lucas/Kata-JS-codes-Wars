function lovefunc(flower1Petals, flower2Petals) {
    if (flower1Petals % 2 === 0 && flower2Petals % 2 !== 0) {
        return true;
    }
    if (flower1Petals % 2 !== 0 && flower2Petals % 2 === 0) {
        return true;
    }
    return false;
}