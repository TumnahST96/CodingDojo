//set everything to prime if 0, prime. 
let sieve = []
sieve[0] = 1
sieve[1] = 1
const setPrime = (number) => {
    console.log(number)
    for (let i = 2; i <= number; i++)
        sieve[i] = 0

}

const createSieve = (number) => {
    // console.log(number)
    // console.log(":hi")
    for (let i = 2; i <= number; i++) {
        if (sieve[i] == 0 && i * i <= number) {
            for (let j = i * i; j <= number; j += i) {
                sieve[j] = 1

            }
        }
    }
};


console.log("for any number fro, 0-10,0000, find the list of primes existing")
let number = 100000;
setPrime(number);
createSieve(number);
for (let i = 0; i <= number; i++) {
    if (sieve[i] == 0) console.log(sieve[i], i)
}