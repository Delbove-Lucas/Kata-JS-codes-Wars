function maskify(s) {
    if (s.length <= 4) {
        return s;
    }
    let masked = '';
    for (let i = 0; i < s.length - 4; i++) {
        masked += '#';
    }
    masked += s.slice(-4);
    return masked;
}