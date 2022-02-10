# Create a function that will receive a list with two numbers. Print the first value and return the second.

# capitals = {} #create an empty dictionary then add values


# Dict = { 'Dict1': {'name': 'Ali', 'age': '19'},
#          'Dict2': {'name': 'Bob', 'age': '25'}}

nums = [
        [1, 2], 
        [2, 3],
        [3, 4]
]

def goTo (nums):
    print(nums[0])
    return nums[1]

for i in nums:
    print(goTo(nums))


# def printRet (Dict, num):
#     print("In function now, and the name is ", Dict[num]['age'])

# for i in Dict:
#     print("First name in loop ",Dict[i]['name'], "and last name in fuction ", printRet(Dict, i))