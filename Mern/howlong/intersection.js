//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common
//This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const sorting = (numbers)=>{
    numbers.sort(function(a, b) {
        return a - b;
      });

      return numbers;

}

const getit = (first, sec) =>{
    let temp = []
    for(let i = 0; i<first.length; i++){
        for(let j =0; j<sec.length; j++){
            
            if(first[i]===sec[j]){
                temp.push(first[i])
                sec.splice(j, 1)
                
                break;
            }
                
        }
    }

    console.log(temp)
    return temp
}



// const intersect = (arrLeft, arrRight) => {
//     arrLeft = sorting(arrLeft)
//     arrRight = sorting(arrRight)
//     // console.log(arrLeft)
//     let set1 = new Set(arrLeft)
//     let set2 = new Set(arrRight)

    
//     let intersect = set1.length>set2.length ? (new Set([...set1].filter(i => set2.has(i)))) :
//     (new Set([...set2].filter(i => set1.has(i))));

//     // let c = list((Counter(set1) & Counter(set2)).elements())
//     // return c 

//     // ar1.length>ar2.length?(getit(ar1,ar2)) : (getit(ar2, ar1))
   

//     return intersect;
// }

// console.log(intersect([2,4,7,9,10],[2,2,3,5,7,9,10]));
// console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
// console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
// console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
console.log(getit([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));