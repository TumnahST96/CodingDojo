var count = 1;

var countElement = document.querySelector("#count")
console.log(countElement)

function add1() {
    count++;
    countElement.innerText = "The count is " + count
    console.log(count)
}


// var subtract = -1;

var subtractElement = document.querySelector("#count")
console.log(subtractElement)

function subtract1() {
    count--;
    subtractElement.innerText = "The subtraction is " + count
    console.log(count)
}