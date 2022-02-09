def countdown(i):
    l = []
    n = 0
    k = i
    for n in range (i):
        l[n] = k
        k-=1
        return l
print(countdown(5))

    