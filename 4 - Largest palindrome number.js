// Largest palindrome product - https://projecteuler.net/problem=4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const palindromes = [];

const findPalindrome = (number) => {
    let reverse = Array.from(String(number), Number).reverse().join('');

    if (Number(reverse) === number) {
        console.log(`This is a palindrome - ${number}`)
        return true;
    }
}

const multiply = (initialNumber, finalNumber) => {
    for(initialNumber = initialNumber; initialNumber <= finalNumber; initialNumber++) {
        for(i = initialNumber; i <= finalNumber; i++) {
            if (findPalindrome(initialNumber * i)) {
                palindromes.push({'number': initialNumber * i, 'initialNumber': initialNumber, 'finalNumber': i})
            }
        }
    }

    const maxPalindrome = palindromes
    .map( elem => elem.number)
    .sort()
    
    console.log(`The largest palindrome of 3-digit is ${Math.max(...maxPalindrome)}`);
}

multiply(100, 999)