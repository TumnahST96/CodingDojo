# Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.

lis = [1, 2, 3, 4, 5]

def func(lis):
    length = len(lis)
    return length+lis[0]
   

print(func(lis))