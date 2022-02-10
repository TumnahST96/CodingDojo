#  Write a function that accepts a list and creates a new list containing only the values from the original list
#  that are greater than its 2nd value. Print how many values this is and then return
#   the new list. If the list has less than 2 elements, have the function return False

def TheFun(a, b):
    lst = []

    for i in range (0, a):
        lst.append(b)
    
    return lst

print(TheFun(4, 7))