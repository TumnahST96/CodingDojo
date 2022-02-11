from math import floor
import math
from turtle import left
inns = 0
inns1 =0
inns2 = 0
leftover = 0

change = 3.84
change = change*100


if(change>25):
        inns = int(change/25)
        change = (change %25)
        print(inns)
        
        print(change)
if(change>10):
        inns1 = int(change/10)
        print(inns1)
        change = change%10
        print(change)

if(change>=5):
        inns2 = int(change/5)
        change = change%5

else:
        leftover = int(change)
        change = 0

print(inns,'-Q\n', inns1,'-D\n', inns2,'-N\n', leftover,'-P\n')


