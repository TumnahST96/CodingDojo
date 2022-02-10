#  Write a function that accepts a list and creates a new list containing only the values from the original list that 
#  are greater than its 2nd value. Print how many values this is and then return the new list. 
#  If the list has less than 2 elements, have the function return False

lis = [1, 2, 3, 4, 5]

def func (lst):
    if len(lst)<2:
        return False
    lis = []
    for i in range (0, len(lst)):
        if lst[i]>lst[1]:
            lis.append(lst[i])
    print(len(lis))
    return lis

print(func(lis))
