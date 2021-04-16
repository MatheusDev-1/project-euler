// Power Digit Sum - https://projecteuler.net/problem=16

/* 2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2**1000? */


const number = Array.from(BigInt(Math.pow(2, 1000)).toString())
    .map(Number)
    .reduce( (acc, value) => acc + value);

console.log('The sum of the digits of the number 2**1000 is: ' + number);

