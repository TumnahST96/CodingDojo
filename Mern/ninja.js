class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(`name is ${this.name}`)
        return this
    }

    showStats() {
        console.log(`Ninja's name is ${this.name} and speed and strength are ${this.speed}, ${this.strength}`)
        return this
    }
    drinkSake() {
        this.health += 10
        return this
    }
}







const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();