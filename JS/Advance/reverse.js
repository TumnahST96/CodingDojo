// var string = "hello"
// var st = " "
// var c = 0

// for (let i = string.length - 1; i >= 0; i--) {
//     st += string[i]
// }

// console.log(st)


function firstLet(string) {
    let st1 = "";
    let words = string.split(" ")
    for (let i = 0; i < words.length; i++) {
        st1 += words[i][0]
    }
    let st2 = " "
    
    for (let i = 0; i < st1.length; i++) {
        if (st1[i] >= 'a' && st1[i] <= 'z')
            st2 += String.fromCharCode(st1.charCodeAt(i) - 32)
        else st2 += st1[i]
    }
    return st2

}

console.log(firstLet("watt Insole cap"))