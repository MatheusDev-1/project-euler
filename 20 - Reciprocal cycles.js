// Reciprocal cycles

/* 
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

let max = 0;
let size = 0;

const getDecimal = (n,d) => {
    var out = [];
    var carry = [];
    var pattern_start=-1;
    out.push(Math.floor(n/d));
    if (n % d === 0) return out[0];
    carry.push(-1);
    carry.push(n % d*10);
    while (carry[carry.length-1] >0){
        out.push(Math.floor(carry[carry.length-1] / d));
        var c = carry[carry.length-1] % d;
        if (c === 0) break;
        pattern_start = carry.indexOf(c*10);
        if (pattern_start > -1)break;
        carry.push(c*10);
    }
    if (pattern_start > -1)
        return out[0] + '.' + out.slice(1,pattern_start).join("") + "(" + out.slice(pattern_start).join("") + ")";
    else
        return out[0] + "." + out.slice(1).join("");
};

for (i = 1; i < 1000; i++) {
	let number = getDecimal(1, i);
    
	if (number && number.length > size){
		size = number.length;
		max = i;
	}
}

console.log('The value which contains the longest recurring cycle in its decimal fraction part is: ' + max);