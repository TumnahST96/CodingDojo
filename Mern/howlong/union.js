//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const sorting = (numbers)=>{
        numbers.sort(function(a, b) {
            return a - b;
          });
    
          return numbers;
    
    }

const unionSorted = (first, sec) => {
    let temp = []
    for(let i = 0; i<first.length; i++){
        for(let j =0; j<sec.length; j++){
            
            if(first[i]===sec[j]){
                temp.push(first[i])
                sec.splice(j, 1)
                
                break;
            }
                
        }
        first.splice(i, 1)
    }
    let = i =0;
    for(let i = 0; i<first.length; i++){
        temp.push(first[i])
        
        first.splice(i, 1)
    }
    i = 0
    for(let j =0; j<sec.length; j++){
        temp.push(sec[j])
        sec.splice(j, 1)
    }

    temp = sorting(temp)
    return temp
}

console.log(unionSorted([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7]));
console.log(unionSorted([1,5,9],[2,6,10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (first,sec) => {
    // let temp = []
    // for(let i = 0; i<first.length; i++){
    //     for(let j =0; j<sec.length; j++){
            
    //         if(first[i]===sec[j]){
    //             temp.push(first[i])
    //             sec.splice(j, 1)
                
    //             break;
    //         }
    //         else {
    //             temp.push(first[i])
    //             first.splice(i, 1) 
    //         }
                
    //     }
        
    //     first.splice(i, 1)
    // }
    // let = i =0;
    // for(let i = 0; i<first.length; i++){
    //     if(first[i]===first[i+1]){
    //         temp.push(first[i])
    //         first.splice(i, 1)
    //         first.splice(i+1, 1)
    //     }
    //     else{
    //         first.splice(i, 1)
    //         first.splice(i+1, 1)  
    //     }
            
    // }
    
    // for(let j =0; j<sec.length; j++){
    //     if(sec.length>1 && sec[j]!=sec[j+1])
    //         temp.push(sec[j])
    //     sec.splice(j, 1)
    // }

    // // temp = sorting(temp)
    // return temp
}

// console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));