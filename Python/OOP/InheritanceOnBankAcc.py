
import re
from telnetlib import SE
from threading import activeCount


class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def addInterest(self):
        # print("hi after")
        if self.balance>0:
            self.balance+=self.balance*self.int_rate 
            return self
    
    def withdraw(self, amount):
        if self.balance-amount>=0:
            self.balance -=amount
            print(f"balance now { self.balance} ")
           
        else:
           
            print("Not enough balance")
     
        return self

    def deposit(self, amount):
        self.balance+=amount
        self.addInterest()
        
        return self

    def balance_display(self):
        print(f"Your balance is {self.balance}")
        return self

    
    
# class CheckingAccount(BankAccount):
#     pass
class RetirementAccount(BankAccount):
    def __init__(self, int_rate, is_roth, balance=0):
        self.int_rate = int_rate
        self.balance = balance
        self.is_roth = is_roth  

    def withdraws(self, amount, is_early):
        if is_early:
            amount = amount * 1.10
        super().withdraw(30)
        return self

    

# class user:
#     def __init__(self, fName, lname):
#         self.fName = fName
#         self.lname = lname
        
#         self.account = BankAccount(.25)
        
#     def make_Deposit(self, amount):
#             self.account.deposit(amount)
#             return self

#     def make_withdraw(self, amount):
#         self.account.withdraw(amount)
#         return self
    
#     def display(self):
#         print(f"hello Mr. {self.fName}!")
#         self.account.balance_display()
#         return self
        
            

 
   


Steve = RetirementAccount(.25, 2, 50)
Steve.withdraws(30, True)

