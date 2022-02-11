
import re
from telnetlib import SE
from threading import activeCount


class BankAccount:
    def __init__(self):
        self.account_balance = 0
        self.interest = 0.02


    def addInterest(self):
        # print("hi after")
        if self.account_balance>0:
            self.account_balance+=self.account_balance*self.interest 
            return self
    
    def withdraw(self, amount):
        if self.account_balance-amount>=0:
            self.account_balance -=amount
            print(f"balance now { self.account_balance} ")
           
        else:
           
            print("Not enough balance")
     
        return self

    def deposit(self, amount):
        self.account_balance+=amount
        self.addInterest()
        
        return self

    def balance_display(self):
        print(f"Your balance is {self.account_balance}")
        return self


    

class user:
    def __init__(self, fName, lname):
        self.fName = fName
        self.lname = lname
        
        self.account = BankAccount()
        
    def make_Deposit(self, amount):
            self.account.deposit(amount)
            return self

    def make_withdraw(self, amount):
        self.account.withdraw(amount)
        return self
    
    def display(self):
        print(f"hello Mr. {self.fName}!")
        self.account.balance_display()
        return self
        
            

 
   


Steve = user("steve", "bb")
Steve.make_Deposit(5).make_withdraw(20).display()