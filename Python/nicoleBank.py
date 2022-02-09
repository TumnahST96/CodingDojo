import re
from threading import activeCount


class BankAccount:
    def __init__(self, int_rate = 0.01, balance = 0): 
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(self.balance)
        return self

    def withdraw(self, amount):
        # fix later
        self.balance -= amount
        if self.balance < 0:
            print("Insufficient funds: charging a $5 fee")
            self.balance = self.balance - 5
        return self 

    

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance* self.int_rate
            return self
    
account1 = BankAccount()
   
    
account1.deposit(30).deposit(50).deposit(50).withdraw(50).yield_interest()



