function Hero() {
    this.position = '00';
}

Hero.prototype.move = function(dir) {
    const moves = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
    const [row, col] = this.position.split('').map(Number);
    const [dRow, dCol] = moves[dir] || [];

    if (dRow === undefined || row + dRow < 0 || row + dRow > 4 || col + dCol < 0 || col + dCol > 4) {
        throw new Error('Invalid move');
    }

    this.position = `${row + dRow}${col + dCol}`;
};

const myHero = new Hero();
console.log(myHero.position);

myHero.move('right');
console.log(myHero.position);

myHero.move('down');
console.log(myHero.position);

try {
    myHero.move('up');
    myHero.move('up');
} catch (e) {
    console.error(e.message);
}