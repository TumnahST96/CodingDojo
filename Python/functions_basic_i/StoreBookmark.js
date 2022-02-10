let store = ''
var ar = [1, 5, 6, 3, 4, 9, 10]

ar.sort(function(a, b) {
    return a - b;
});

let start = 0, //start and end point 
    end = 0;

for (let i = 0; i < ar.length; i++) {
    start = ar[i]
    while (ar[i + 1] - 1 == ar[i] && i < ar.length) {
        i++

    }
    if (start != ar[i]) {
        end = ar[i]
        store += start + '-' + end + ', '
    } else {
        store += start
        if (i != ar.length - 1) {
            store += ', '
        }
    }


}


console.log(store)