//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//toUpperCase is a good idea to use
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
    let stored = {}
    for (let c = 65; c <= 90; ++c){
        stored[(String.fromCharCode(c))] = false
    }

    console.log(stored)
        

    

    str = str.toUpperCase();
    console.log(str)
  

    for(let i = 0; i<str.length; i++){
        if(str[i]>='A' && str[i]<='Z'){
            stored[str[i]] = true; 
        }
        
    }
  
  
    for (const key in stored) {
        if(!(stored[key]==true)){
            return false;
        }
    }


    return true;

}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {

    let stored = {}
    for (let c = 65; c <= 90; ++c){
        stored[(String.fromCharCode(c))] = false
    }

        



    str = str.toUpperCase();
    console.log(str)
  

    for(let i = 0; i<str.length; i++){
        if(str[i]>='A' && str[i]<='Z'){
            if (!stored[str[i]]) {
                stored[str[i]] = 1;
              } else return false;
        }
        
    }
  
  
    for (const key in stored) {
        if(!(stored[key]==1)){
            return false;
        }
    }


    return true
}

console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
console.log(isPerfectPangram("The five boxing wizards jump quickly."))
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOPp"));