// Factorial digit sum - https://projecteuler.net/problem=20

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const generateFactorial = (number) => {
    let factors = [];

    for (i = number; i > 0; i--) {
        factors.push(i);
    }

    const factorsProduct = factors.reduce( (acc, value) => BigInt(value) * BigInt(acc));
    const sumOfDigits = Array.from(factorsProduct.toString()).map(Number).reduce( (acc, value) => acc + value);

    return sumOfDigits;
};

const result = generateFactorial(100);

console.log(result)