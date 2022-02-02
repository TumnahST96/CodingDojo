function Login (element){
    element.innerText = "Logout"
   
}
function Remover (element){
    element.remove();
}

var testdiv1 = document.querySelector('.NinSkill .likes')
var count1 = 0;
function clickevent1 () {
    count1++;
    testdiv1.innerText = count1+" likes"

}
var testdiv = document.querySelector('.NinProg .likes')
var count = 0;
function clickevent2 () {
    count++;
    testdiv.innerText = count+" likes"

}



