const { faker } = require('@faker-js/faker');
class Order {
    constructor(){
        const base = ["expresso shot", "creamer", "ice breaker", "dark roast", "chai tea", "abc"];
        const additive = ["vanilla", "syrup", "sugar", "splendid"];
        const toppings = ["caramel drizzle", "whipped cream", "chocolate sypur", "marshmallo"];
        this.name = faker.name.findName();
        this.bases = base[Math.floor(Math.random()*base.length)];
        this.add = additive[Math.floor(Math.random()*additive.length)];
        this.coffeShop = faker.company.companyName()+" Coffe Roaster";
        this.price = "$"+faker.finance.amount();
        this.topp = toppings[Math.floor(Math.random()*toppings.length)]; 
        this.barrista = faker.image.avatar();
    }
}
module.exports = Order;