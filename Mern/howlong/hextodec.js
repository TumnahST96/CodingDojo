//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466

// 2*16^0= 2
function prod(num, j){
    if(j==0) return num; 
    let product = 1
    for(let i = 1; i<=j; i++){
        product  = product* 16;
    }
    return product*num;
}
const hexStrToDec = (str) => {
    
    store = {
        'A' : 10,
        'B' : 11, 
        'C' : 12, 
        'D' : 13, 
        'E' : 14, 
        'F' : 15

    }
    let j = 0;
    let sum = 0;
    for(let i = str.length-1; i>= 0; i--){
        if(str[i]>='A' && str[i]<='F'){
           
            let num = store[str[i]]; 
            // console.log(num)
            sum += prod(num, j);
            j++;
        }
        else {
            let num = parseInt(str[i]);
            sum += prod(num, j);
            j++;
        }
    }
    return sum;
}

console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));
console.log(hexStrToDec("3B5"));
console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
}

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));