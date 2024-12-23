function Hero(name = 'Hero') {
    this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}

const heroParDefaut = new Hero("");
console.log(heroParDefaut);