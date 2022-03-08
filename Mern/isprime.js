//set everything to prime if 0, prime. 
const setPrime = (number) => {
    for (let i = 2; i < number; i++)
        sieve[i] = 0

}

const createSieve = (number) => {
    for (let i = 2; i <= number; i + 2) {
        if (sieve[i] == 0) {
            for (let j = 2; j * i <= number; j++) {
                sieve[i * j] = 1
            }
        }
    }
};
let sieve = []
sieve[0] = 1
sieve[1] = 1

console.log("for any number fro, 0-10,0000, find the list of primes existing")
setPrime(50);
createSieve(50);
for (let i = 0; i <= 50; i++) {
    if (sieve[i] == 0) console.log(sieve[i])
}