from math import ceil, floor


string = 'accddcbbcdda'


def fromMid(string, left, right):
    if(left>right):
        return 0
    while((left>=0 and right< len(string) )and string[right]==string[left]):
        # print(string[left], string[right])

        right+=1
        left-=1
    
    
    return right-left-1  # it returns mid value of the substring
    

def longestPal(string):
    start = 0
    end = 0
    for i in range (0, len(string)):
        len1 = fromMid(string, i, i) # i and i to check for mid value itself incase string is odd
        len2 = fromMid(string, i, i+1) # for even vals
        FinLen = max(len1, len2) # after iteration take max of both of the lengths
        # print(FinLen)
        if(FinLen>end-start):
            start = int(i-((FinLen-1)/2)) # set the starting value of the longest value and the ending value too 
            end = int(i+((FinLen)/2))
            print(start, end)
            print(string[start:end])

    return string[start+1:end+1]

print(longestPal(string))