
// const partition = (ar, low = 0, high = ar.length -1) =>{ 
//     let pivot = ar[low]
//     let pivotIdx = low
//     for(let i = 1; i<high; i++){
//         if(ar[i]<pivot){
            
//             let temp = ar[i]
//             ar[i] = ar[pivotIdx]
//             ar[pivotIdx] = temp
//             pivotIdx++;
//             console.log(ar[i], ar[pivotIdx])

//         }
//     }
//     //place our 5
//     return (pivotIdx-1)
// }

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    };
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let pivotIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIdx++;
            swap(arr, pivotIdx, i);
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, pivotIdx);
    return pivotIdx;
}
[5,1,2,6,8]
     i
[2,1,5,8,6]
function quickSort(arr, left = 0, right= arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr,left, pivotIndex-1)
        quickSort(arr,pivotIndex + 1, right)
    }
    return arr
}
console.log(quickSort([-10,33,5,30]));

// function quickSort(ar, low, high){
   
//     if(low<high){
//         let pivot = ar[high]
//         let thisValue = partition(ar, low, high, pivot)

//         quickSort(ar, low, thisValue-1);
//         quickSort(ar, thisValue+1, high);
//     }
// }




// let ar = [3, 6, 1, 3, 2, 8, 100, 3, 2, 4, 1]
// partition(ar, 0, ar.length-1)
// console.log(ar)