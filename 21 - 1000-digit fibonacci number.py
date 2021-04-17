## 1000-digit Fibonacci number - https://projecteuler.net/problem=25

#
# The Fibonacci sequence is defined by the recurrence relation:
#
# Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
# Hence the first 12 terms will be:
#
# F1 = 1
# F2 = 1
# F3 = 2
# F4 = 3
# F5 = 5
# F6 = 8
# F7 = 13
# F8 = 21
# F9 = 34
# F10 = 55
# F11 = 89
# F12 = 144
# The 12th term, F12, is the first term to contain three digits.
#
# What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
#

f1 = 1
f2 = 1
f = 2


def findFibonnaci():
    global f
    global f2
    actualNumber = f + f2
    f2 = f
    f = actualNumber

    return actualNumber


for i in range(0, 10000):
    if len(str(findFibonnaci())) > 999:
        print(i + 4, ' --- ', len(str(findFibonnaci())))
        break


