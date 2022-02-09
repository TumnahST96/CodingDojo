# def number_of_food_groups():
#     return 5
# print(number_of_food_groups())

# #predictedOutput: 5 

# #2
# def number_of_military_branches():
#     return 5
# print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())

# def add(a, b):
#     return a+b
# new_val = add(3, 5)    # calling the add function, with arguments 3 and 5
# print(new_val)

# def say_hi(name):
#     print("Hi, " + name)

# say_hi('Michael')
# say_hi('Anna')
# say_hi('Eli')

# def say_hi(name):
#     return "Hi " + name
# greeting = say_hi("Michael") # the returned value from say_hi function gets assigned to the 'greeting' variable
# print(greeting) 

# def add(a, b):
#     x = a + b
#     return x
# sum1 = add(4,6)
# sum2 = add(1,4)
# sum3 = sum1 + sum2
# print(sum3)

def be_cheerful(name='', repeat=2):
	print(f"good morning {name}\n" * repeat)
be_cheerful()    # output: good morning (repeated on 2 lines)
be_cheerful("tim")    # output: good morning tim (repeated on 2 lines)
be_cheerful(name="john")    # output: good morning john (repeated on 2 lines)
be_cheerful(repeat=6)    # output: good morning (repeated on 6 lines)
be_cheerful(name="michael", repeat=5)    # output: good morning michael (repeated on 5 lines)
# NOTE: argument order doesn't matter if we are explicit when sending in our arguments!
be_cheerful(repeat=3, name="kb")   