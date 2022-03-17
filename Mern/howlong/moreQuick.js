
const partition = (arr) => {
    let pivot = arr[0]
    let pivi = 0

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return pivi;
}


const quickSort = (arr) =>{
    if(arr.length<=1) 
        return arr;
    
        let num = partition(arr)
        let left = arr.slice(0, num)
        //quickSort(ar, low, num-1)
        let right = arr.slice(num+1)
        //quickSort (ar, num, high)

        return [...left, arr[num], ...right];
    
}



console.log(quickSort([7, 45, 2, 67, 3, 2, 1]))