// Amicable numbers - https://projecteuler.net/problem=21

/* 
Let findDivisors(number) be defined as the sum of proper findDivisors of number (numbers less than number which divide evenly into number).
If findDivisors(a) = b and findDivisors(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper findDivisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore findDivisors(220) = 284. The proper findDivisors of 284 are 1, 2, 4, 71 and 142; so findDivisors(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

let sumOfAllAmicables = 0;

const findDivisors = (number) => {
    let sumOfFactors = 0;

    for (i = 0; i < number; i++) {
      if (number % i === 0) {
        sumOfFactors += i;
      }
    }
  
    return sumOfFactors;
}
  
for (let i = 1; i < 10000; i++) {
    const sum = findDivisors(i);
    const subSum = findDivisors(sum);

    if (subSum === i && i !== sum) {
        sumOfAllAmicables += i;
    }
}
  
console.log('The sum of all the amicable numbers under 10000 is: ' + sumOfAllAmicables);
