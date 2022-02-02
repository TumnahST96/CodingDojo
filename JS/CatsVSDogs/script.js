
var animalImg = document.querySelector ("#FavAnimal")

function pickcat(element){
    // element.style.backgroundColor = "goldenrod"
    element.remove()
    animalImg.src = "cat.jpg"
}

function pickdog(element){
    console.log(element.classList)
    element.classList.add("btn")
    animalImg.src = "dog.png"
}