// Names scores - https://projecteuler.net/problem=22

/* 
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

*/

const fs = require('fs');
const { resolve } = require('path');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const names = fs.readFileSync(resolve(__dirname, 'names.txt'), { encoding: 'utf-8', flag: 'r' }).split(',');

const formatNames = names
    .map( (name) => name.replace('"', '').replace('"', ''))
    .sort( (a, b) => a.localeCompare(b));


const valueForLetter = (letter) => alphabet.indexOf(letter) + 1;
const valueForIndexedName = (name) =>  formatNames.indexOf(name) + 1;
const valueForName = (name) => {
    const nameValue = name
        .split('')
        .map( (letter) => valueForLetter(letter))
        .reduce( (acc, value) => acc + value);

    const positionOfName = valueForIndexedName(name);

    const total = nameValue * positionOfName;

    return total;
}

const scores = formatNames
    .map( (name) => valueForName(name))
    .reduce( (acc, value) => acc + value);

console.log('The total score for all names in the list is: ' + scores);

