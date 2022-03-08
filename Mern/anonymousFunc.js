var sayHello = function(name) {
    console.log('Hello ' + name);
};

//the function avobe can be called as defines below

const sayHello = (name) => {
    console.log('Hello ${name}');
};
//the function now is known as anonymous and it can be further simplified due to only one argument being passed
//no need for any parenthesis as its a single parameter reciever 
const sayHello = name => console.log('Hello ${name}');

var square = function(n) {
    return n * n;
};

//arrow funtion doesn't require a return. it will return auto

const square = n => 'n * n';

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
        return {
            firstName: 'John',
            lastName: 'Wick'
        }
    }
    /**
     * The example below wouldn't work because the 
     * brackets are interpreted as opening the body of the 
     * function rather than brackets to create an object literal 
     */
const returnObj = () => { firstName: 'John', lastName: 'Wick' }
    // surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });


class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
}

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(function(suit) {
            faces.forEach(function(face) {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
}
//explain
//if we have a createcard method existing iunside of class deck, then avobe code would be error

//to fix: 
class Deck {
    constructor() {
            const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
            const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
            const deck = [];
            suits.forEach(suit => {
                faces.forEach(face => {
                    deck.push(this.createCard(suit, face));
                });
            });
            this.deck = deck;
        }
        //the method
    createCard(suit, face) {
        //some work
        //Arrow functions don't create their own context, they look to their
        //  enclosing scope for that information. Therefore, this should 
        //  now refer to the Deck instance, which has a createCard method
    }
}