# # print("start")
# fruits = ['apple', 'banana', 'orange', 'strawberry']
# # vegetables = ['lettuce', 'cucumber', 'carrots']
# # fruits_and_vegetables = fruits + vegetables
# # print(fruits_and_vegetables)
# # salad = 3 * vegetables
# # print(salad)
# # fruits.append('nugget')

# # print(fruits)
# print("start")
# x = [99,4,2,5,-3]
# # print(x)
# # print(x[:])

# # print(x[1:])

# # print(x[:4])

# # print(x[2:4])
# print(x.index(5))
# x.pop(3)
# print(x)

# tuple_data = ('physics', 'chemistry', 1997, 2000)
# print(tuple_data)

# dog = ("Canis Familiaris", "dog", "carnivore", 12)
# print(dog)
# # expands it. doesn't add. creates new dog with new value by adding new value to old dog 
# dog = dog + ("domestic",) 
# print(dog)
# dog = dog[:3] + ("man's best friend",) + dog[4:]
# print(dog)

# # map(function, sequence)

# weekend = {"Sun": "Sunday", "Sat": "Saturday"} #literal notation
# capitals = {} #create an empty dictionary then add values
# capitals["svk"] = "Bratislava"
# capitals["deu"] = "Berlin"
# capitals["dnk"] = "Copenhagen"

# # print(capitals)
# # print(weekend["Sun"])

# # print(capitals["svk"])
# value_removed = capitals.pop('svk') # will remove the key 'svk' and return it's value
# print(capitals)
# del capitals['dnk']
# print(capitals)

context = {
    'questions': [
        { 'id': 1, 'content': 'Why is there a light in the fridge and not in the freezer?'},
        { 'id': 2, 'content': 'Why don\'t sheep shrink when it rains?'},
        { 'id': 3, 'content': 'Why are they called apartments when they are all stuck together?'},
        { 'id': 4, 'content': 'Why do cars drive on the parkway and park on the driveway?'}
    ]
}
# print(context['questions'][0]['content'])

# for k in context:
#     # print(context[k])
#     # print(k,'\n')
# for k in context['questions']:
#     # print(context[k])
#     print(k)

# for k in range(0, len(context['questions'])):
#     # print(context[k])
#     print(context['questions'][k]['content'])


print(type(context))



# for k in context['questions'][context]: not owkring
#     # print(context[k])
#     print(k)


