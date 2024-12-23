const basicOp = (operation, valeur1, valeur2) => {
    if (operation === '+') return valeur1 + valeur2;
    if (operation === '-') return valeur1 - valeur2;
    if (operation === '*') return valeur1 * valeur2;
    if (operation === '/') return valeur2 !== 0 ? valeur1 / valeur2 : "Erreur : division par zéro";
    return "Opération non valide";
};