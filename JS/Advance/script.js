var ptag = document.querySelectorAll("p")

function getcolor(element) {
    console.log(element.value)

    for (var i = 0; i < ptag.length; i++) {
        ptag[i].style.color = element.value
    }
}