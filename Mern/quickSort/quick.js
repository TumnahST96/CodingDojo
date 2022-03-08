let ar = [10, 80, 90, 60, 30, 20]


const quick = (ar, low, high) => {
    let pivot = ar[high - 1]
    let i = low
    for (let j = low; j <= high - 1; j++) {
        if (ar[j] < pivot) {
            i++
            let swap = ar[i]
            ar[i] = ar[j]
            ar[j] = swap
        }
    }

};

console.log(ar, 0, ar.length)