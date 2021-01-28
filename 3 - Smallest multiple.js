// Smallest multiple - https://projecteuler.net/problem=5

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const findSmallestPositiveNumber = (number) => {
    let numbers = [];
    divisors.map( (divisor) => number % divisor === 0 ? numbers.push(number) : '');
    if(numbers.length === 20) {
        return console.log(number);
    }
};

for(i = 0; i < 9000000000; i++) {
    findSmallestPositiveNumber(i)
};