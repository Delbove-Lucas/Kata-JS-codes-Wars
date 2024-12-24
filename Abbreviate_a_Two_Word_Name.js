function abbrevName(name) {
    let parts = name.split(' ');
    let firstInitial = parts[0][0].toUpperCase();
    let secondInitial = parts[1][0].toUpperCase();
    return firstInitial + '.' + secondInitial;
}
