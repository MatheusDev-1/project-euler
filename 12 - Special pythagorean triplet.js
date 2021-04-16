// Special Pythagorean triplet - https://projecteuler.net/problem=9

/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

let a, b, c;

const calculateTripplet = () => {
    for (a = 0; a <= 1000; a++) {
        for (b = a + 1; b <= 1000; b++) {
            for (c = b + 1; c <= 1000; c++) {
            if (((a*a + b*b == c*c) && ((a + b + c) === 1000))) {
               console.log(a, b, c);
               console.log('The product of the triplet of 1000 is: ' + (a * b * c))
                }
            }
        }
    }
    
    return 0;
}

calculateTripplet();
