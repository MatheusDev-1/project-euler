// Multiples of 3 and 5 - https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let multiples = [];

for(i = 0; i < 1000; i++) {
    if(i !== 0 && (i % 3 === 0 || i % 5 === 0)) {
        multiples.push(i);
    }
}

const soma = multiples.reduce((acc, value) => acc + value);

console.log(`A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é ${soma}`)