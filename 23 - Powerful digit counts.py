## Powerful digit counts - https://projecteuler.net/problem=63

# The 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit number, 134217728=89, is a ninth power.

# How many n-digit positive integers exist which are also an nth power?

result = 0

for i in range(1, 10):
    power = 1
    while True:
        if power == len(str(i ** power)):
            result += 1
        else:
            break

        power += 1

print('There are ' + str(result) + ' integers which are also an nth power') 