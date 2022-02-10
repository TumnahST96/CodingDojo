
# Nested dictionary having same keys
Dict = { 'Dict1': {'name': 'Ali', 'age': '19'},
         'Dict2': {'name': 'Bob', 'age': '25'}}

for i in Dict:
    print("First name is ",Dict[i]['name']," and age is ",Dict[i]['age'])
  
# Prints value corresponding to key 'name' in Dict1
# print(Dict['Dict1']['name'])
  
# # Prints value corresponding to key 'age' in Dict2
# print(Dict['Dict2']['age'])

context = {
    'students1': {'first_name' :  'Michael', 'last_name' : 'Jordan'},
    'students2': {'first_name' : 'John', 'last_name' : 'Rosales'},
    'students3': {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    'students4': {'first_name' : 'KB', 'last_name' : 'Tonel'}
    
}

for i in context:
    print("First name is ",context[i]['first_name']," and age is ",context[i]['last_name'])
