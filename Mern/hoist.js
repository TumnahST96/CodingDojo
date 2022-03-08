// 1
// let hello;
// console.log(hello)
// hello = "world"

// 2
// var needle;

// function test() {    
//     var needle = 'magnet';    
//     console.log(needle);
// }

// needle = 'haystack'
// test();

// 3  question on this
// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }

// brendan = 'super cool'
// console.log(brendan);

// 4
// let food = 'chicken';;
// console.log(food);

// function eat(food) {        
//     console.log(food);    
//     food = 'gone';
// }
// food = 'half-chicken';

// eat(food);

// 5 question

// function mean(food) {

//     console.log(food);
//     food = "fish";
//     console.log(food);
// }

// let food = "chicken";
// console.log(mean(food));

// 6



// function rewind() {    
//     genre = "rock";    
//     console.log(genre);    
//     genre = "r&b";    
//     console.log(genre);
// }
// let genre = "disco";
// console.log(genre);
// rewind();

// 7



// function learn() {    
//     let dojo = "seattle";    
//     console.log(dojo);    
//     dojo = "burbank";    
//     console.log(dojo);
// }
// // console.log(dojo);

// let dojo = "san jose";
// console.log(dojo);
// learn();

// 8

function makeDojo(name, students) {    
    const dojo = {};    
    dojo.name = name;    
    dojo.students = students;
    dojo.hiring = false;    
    if (dojo.students > 50) {         dojo.hiring = true;     }    
    else if (dojo.students <= 0) {         dojo.hiring = false;     }    
    return dojo.hiring;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));