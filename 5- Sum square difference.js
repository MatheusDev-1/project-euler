// Sum square difference - https://projecteuler.net/problem=6

// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const oneHundredNumbers = () => {
    let numbers = [];
    for(i = 1; i <= 100; i++) {
        numbers.push(i)
    }

    return numbers;
}

const pow = (number) => {
    return Math.pow(number, 2)
};

const sum = (numbers) => {
    return numbers.reduce( (acc, value) => acc + value)
};

const square = (number) => {
    return pow(number);
}

const squareOneHundredNumbers = () => {
    return oneHundredNumbers().map( number => pow(number))
};

const natural = sum(squareOneHundredNumbers());
const squareOfTheSum = pow(sum(oneHundredNumbers()));

const result = squareOfTheSum - natural;

console.log(result);