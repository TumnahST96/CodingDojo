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
        newWord = curWord[0].toUpperCase() + curWord.slice(1)
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