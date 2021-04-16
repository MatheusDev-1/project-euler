// 10001st Prime Number - https://projecteuler.net/problem=7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

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

const createPrimes = (maxLimit) => {
    let primes = [];

    for (var i = 2; i <= maxLimit; i++) {
        if (verifyPrimeNumber(i)) {
            primes.push(i);
        }
    }

    return primes;
} 

allprimes = createPrimes(105000);  

console.log('The 10001st Prime Number is ' + allprimes[10000]);  
  