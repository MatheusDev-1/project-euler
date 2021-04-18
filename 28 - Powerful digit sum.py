## Powerful digit sum - https://projecteuler.net/problem=56

# A googol (10100) is a massive number: one followed by one-hundred zeros; 100100 is almost unimaginably large: one followed by two-hundred zeros. 
# Despite their size, the sum of the digits in each number is only 1.
# Considering natural numbers of the form, ab, where a, b < 100, what is the maximum digital sum?

maxDigitSum = max(sum(map(int, str(number ** base))) for number in range(100) for base in range(100))


print('The maximum digital sum: ' + str(maxDigitSum))