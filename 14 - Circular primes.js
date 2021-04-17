// Circular primes - https://projecteuler.net/problem=56

/* The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

let circularPrimes = [];

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

const rotate = (arr, count = 1) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };

const isCircularPrime = (number) => {
    const arrayFromNumber = Array.from(String(number), Number);
    const arrayLength = arrayFromNumber.length;
    let primes = [];

    for (i = 0; i < arrayLength; i++) {
        const newNumber = rotate(arrayFromNumber, i);

        if (verifyPrimeNumber(Number(newNumber.join('')))) {
            primes.push(Number(newNumber.join('')));
        }
    }

    if (arrayLength === primes.length) {
        circularPrimes.push(number)
    }
    
    return;
};

for (let i = 1; i < 1000000; i++) {
    isCircularPrime(i)
}

console.log('There are below one million: ' + circularPrimes.length);



