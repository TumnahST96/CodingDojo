

// const cookieCon = document.querySelector(".cooki")
// const cookieBut = document.querySelector(".butt")

// cookieBut.addEventListener("click",() =>{
//     cookieCon.classList.remove("active");
//     localStorage.setItem("cookieBannerDisplayed", "true");

// })
// setTimeout(()=>{
//     if (!localStorage.getItem("cookieBannerDisplayed")){
//         cookieCon.classList.add("active");
//     }
   
// },2000)


function addNewPic(){
    var plantImg = document.querySelector("#succu")
    plantImg.src = "succulents-2.jpg"
}
function backImg(){
    var plantImg = document.querySelector("#succu")
    plantImg.src = "succulents-1.jpg"
}