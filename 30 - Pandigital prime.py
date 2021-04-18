## Pandigital prime

# We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
# What is the largest n-digit pandigital prime that exists?

from itertools import permutations

def isPrime(number):
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True

permutations = permutations('1234567')

for i in list(permutations)[::-1]:
    if int(i[6]) % 2 != 0:
        number = int(''.join(i))
        if (number + 1 ) % 6 == 0 or (number - 1) % 6 == 0:
            if isPrime(number):
                print(number)
                break