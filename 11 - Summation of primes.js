// Summation of primes - https://projecteuler.net/problem=10

/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */

const twoMillion = 2000000

const verifyPrimeNumber = (number) => {
    if (number == 1) {
        return false;
    } 

    let sqrt = Math.floor(Math.sqrt(number));

    for (var i = 2; i <= sqrt; i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
} 

const getSumOfPrimes = (number) => {
    let primes = [];

    for (i = number; i > 0; i--) {
        if (verifyPrimeNumber(i)) {
            primes.push(i);
        }
        
    }

    const sumOfPrimes = primes.reduce( (acc, value) => acc + value);

    return sumOfPrimes;
}

console.log('The sum of all the primes below two million is: ' + getSumOfPrimes(twoMillion));