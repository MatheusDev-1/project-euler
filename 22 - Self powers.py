## Self powers - https://projecteuler.net/problem=48

## The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
## Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

from functools import reduce

def add(a, b):
    result = a + b
    return result

powers = []

for i in range(1, 1001):
    powers.append(i ** i)

reduced = str(reduce(add, powers))

print(reduced[-10:])