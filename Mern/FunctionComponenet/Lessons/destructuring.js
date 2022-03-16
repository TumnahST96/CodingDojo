//1 const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// // tesla
// const [, otherRandomCar] = cars
// // mercedes
// console.log(randomCar)
// console.log(otherRandomCar)

//2 const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// // maybe error as before employee name, there aren't any name
// console.log(name);
// //as name is described othr name, name itself mgiht not print anything. 
// console.log(otherName);

//4 const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output: person doens't have a variable password so undefined
// console.log(password);
// console.log(hashedPassword);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output: value, 2, error,  5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);