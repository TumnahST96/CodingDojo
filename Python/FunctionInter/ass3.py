# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and
#  a key name, the function prints the value stored in that key for each dictionary. For example, 
#  iterateDictionary2('first_name', students) should output:

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students, key):
    for i in range (len(students)):
        print(students[i][key])

iterateDictionary(students, 'first_name')


iterateDictionary(students, 'last_name')