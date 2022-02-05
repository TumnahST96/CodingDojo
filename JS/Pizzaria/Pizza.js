function makePizza (crust, sauce, cheese, topping){
    var pizza = {};
    pizza.crust = crust;
    pizza.cheese = cheese;
    pizza.sauce = sauce;
    pizza.topping = topping;
    return pizza;
}

var pizza = {
    crusttype:["thincrust", "stuffedcrust", "regular", "deepDish"], 
    sauceType: ["arugola", "tomatoe", "no sauce", "marinara"],
    toppings: ["london broil", "bacon", "tomato", "pepparoni", "sausage"],
    cheese: ["provolone", "pepperjack", "mozzarella"], 
    pizzaOven: function (){
        var ranPiz = {};
        ranPiz.crust = random(this.crusttype);
        ranPiz.sauce = random(this.sauceType);
        ranPiz.tops = random(this.toppings);
        ranPiz.chez = random(this.cheese);
        return ranPiz;
    }

}

console.log(makePizza("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]))
console.log(makePizza("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))


function random (arr){
    min = 0;
    max = arr.length
    return arr[Math.floor(Math.random()*max-min)+min]
}

for(var i = 1; i<=2; i++){
    console.log(pizza.pizzaOven())
}