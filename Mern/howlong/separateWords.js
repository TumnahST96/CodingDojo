//given a string of words(with spaces),
//return an array of words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let str2 = [];
    let word = "";
    let b = false;


    for(let i = 0; i<str.length; i++){
        if(!(str[i]===' ')){ 
            // console.log(str[i])
            word+= (str[i])
        }
        else if(str[i] === ' ' && !(word.length==0)){
            str2.push(word);
            word =""
        }
     
    }
    if(word.length!=0){
        str2.push(word);
    }
    return str2;

}



console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));