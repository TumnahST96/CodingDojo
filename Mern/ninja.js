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
        console.log(`${this.constructor.name}'s name is ${this.name} and speed and strength are ${this.speed}, ${this.strength}`)
        return this
    }
    drinkSake() {
        this.health += 10
        return this
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom

    }

    speakWisdom() {
        super.drinkSake()
        console.log(`${this.name} sensei's health is ${this.health}`)
    }
}







const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"