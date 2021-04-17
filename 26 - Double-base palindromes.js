// Double-base palindromes

/* 
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

let sum = 0;

const verifyPalindrome = (number) => {
    var str = number.toString();
    return str == str.split("").reverse().join("");
};


for (i = 1; i < 1000000; i++) {
    if (verifyPalindrome(i.toString(10)) && verifyPalindrome(i.toString(2))) {
        sum += i;
    }
}   

console.log('The sum of all numbers, less than one million, which are palindromic in base 10 and base 2 is: ' + sum);