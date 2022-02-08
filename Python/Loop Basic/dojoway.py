# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, 
# print "Coding" instead. If divisible by 10, print "Coding Dojo".

for i in range (1, 100):
    if i%5 ==0 and i%10!=0:
        print("Coding")
    elif i%10 ==0:
        print("Coding Dojo")
    else:
        print(i)