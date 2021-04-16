// Largest prime factor - https://projecteuler.net/problem=3

/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

const largestPrimeFactor = (number) => {
    let two = 2;

    while (two <= number){
        if (number % two == 0) {
            number /= two;    
        } else {
            two++;
        }
    }

    return two;
}

console.log('The largest prime factor of the number 600851475143 is: ' + largestPrimeFactor(600851475143))