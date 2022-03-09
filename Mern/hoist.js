// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map(item => `<li>${item}</li>`);


// const values = [1, 2, 3, 4, 5];
// const cubes = values.map(val => val ** 3);

// // const values = [1, 2, 3, 4, 5];
// const evens = numbers.filter( val => val % 2 === 0 );

// console.log(evens)
const convertToTitleCase = (str) => {

    let words = str.split(" ")
    console.log(words)
    for (let i in words) {
        let curWord = words[i];
        let newWord = '';
        newWord = curWord[0].toUpper() + curWord.slice(1)
        words[i] = newWord;
    }
    return words.join(" ")
}


const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter(item => item.includes("o"));
const oFoodsMap = groceries.map(item => convertToTitleCase(item));

console.log(oFoodsMap)

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter(val => val % 2 !== 0).map(val => val ** 3);


console.log(oddCubes)
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