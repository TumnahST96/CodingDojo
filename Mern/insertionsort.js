const insertion = (ar) => {
    // console.log(ar.length)
    for (let i = 1; i < ar.length; i++) {
        // console.log(ar.length)
        for (let j = i; j > 0 && ar[j - 1] > ar[j]; j--) {

            let temp = ar[j - 1]
                // console.log(temp)
            ar[j - 1] = ar[j]
            ar[j] = temp

        }

    }
    return ar
}



console.log(insertion([6, 4, 5, 2, 8, 14, 1, 3]))