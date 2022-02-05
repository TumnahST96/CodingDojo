var nameSpan = document.querySelector("#name")

function setname (element){
    console.log(element.value)
    nameSpan.innerText = element.value;
}
var food = "pizza"
function pickfood(element){
    console.log(element.value)
    food = element.value
}

function order(){
    alert("ordering a "+food)
}