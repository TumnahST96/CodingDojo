// var myButton = document.queryselect('Button');
// myButton.click();
var testdiv = document.querySelector('#testdiv')

var input = document.querySelector('#name')

testdiv.addEventListener('click',whoami)
function clickevent(){
    console.log(testdiv)
    testdiv.innerText = input.value
    testdiv.style.backgroundColor = 'purple'
}
function whoami(){
    
    console.log(this)
}


function help(){

    testdiv.whoami()
}

