class MathDojo:
    def __init__(self, result = 0):
        self.result = result
    def add(self, num, *nums):
        for i in nums:
            self.result+=i
        return self
    def subtract(self, num, *nums):
        for i in nums:
            self.result-=i
        return self
    

# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	
