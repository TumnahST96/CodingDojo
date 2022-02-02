var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answer = document.querySelector('.answer p')

var mybutton = document.querySelector('button');
var timer = 1000;
mybutton.addEventListener('click',shake)

function movediv(time = timer){
    if(time>100){
        setTimeout(movediv,200,time-100)
    }
   
    console.log('timer: ', timer)
}

function myDelay(){
    movediv()
    setTimeout(shake,2000)
}

function shake (){
    var rand = Math.floor(Math.random()*lifesAnswers.length)
    
    answer.innerHTML = lifesAnswers[rand];

    // console.log(rand)
    // var new
    
}