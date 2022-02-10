def countdown(num):
    lis = []
    i = 0
    while(num>0):
        lis.append(num)
        
        num-=1
    return lis


#  x = [99,4,2,5,-3]

print((countdown(5)))