from re import X


x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ 
    {'x': 10, 'y': 20} 
]

# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
# Change the last_name of the first student from 'Jordan' to 'Bryant'
# In the sports_directory, change 'Messi' to 'Andres'
# Change the value 20 in z to 30
print("Before: ",x)
x[1][0] = 15
print("After: ",x)
print("Before: ",students)
students[0]['last_name'] = "Bryant"
print("After: ",students)

print("Before: ",sports_directory)
sports_directory['soccer'][0]= "Andres" 
print("After: ",sports_directory)

print("Before: ",z)
z[0]['y']= 30
print(z)

