// Coded triangle numbers - https://projecteuler.net/problem=42

/* 
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

*/

const fs = require('fs');
const { resolve } = require('path');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const words = fs.readFileSync(resolve(__dirname, 'words.txt'), { encoding: 'utf-8', flag: 'r' }).split(',');
const triangleNumbers = [];
const result = [];

const triangularNumber = (number) => {
    return (number * (number + 1) / 2);
}

for (i = 0; i < 100; i++) {
  triangleNumbers.push(triangularNumber(i));
}

words.map( (word) => {
  let value = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = alphabet.findIndex(letter => letter === word[i]);
    value += idx + 1;
  }

  const number = triangleNumbers.find(triangular => triangular === value);

  if (number) {
    result.push(number);
  }

});

console.log('There are ' + result.length + ' triangle words');