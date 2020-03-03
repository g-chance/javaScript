class Ninja {
    constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
    }
    sayName() {
        console.log(`${this.name}`)
    }
    showStats() {
        console.log(`${this.health}, ${this.speed}, ${this.strength}`)
    }
    drinkSake() {
        this.health += 10
    }
}

const ninja1 = new Ninja("Kikomo", 50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();