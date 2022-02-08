
import re
from threading import activeCount


class BankAccount:
    def __init__(self, Fname, Lname, balance, intRate):
        self.Fname = Fname
        self.Lname = Lname
        self.account_balance = 0
        if balance>0:
            self.account_balance = balance
        else:
            self.account_balance = 0
        self.intRate = intRate
    def addInterest(self):
        # print("hi after")
        if self.account_balance>0:
            self.account_balance+=self.account_balance*self.intRate 
            return self
    def deposit(self, amount):
        self.account_balance+=amount
        print(f"balance now { self.account_balance} ")
        self.addInterest()
        print(f"balance now { self.account_balance} ")
        return self
    def withdraw(self, amount):
        if self.account_balance-amount>=0:
            self.account_balance -=amount
            print(f"balance now { self.account_balance} ")
           
        else:
           
            print("Not enough balance")
            
        return self
    def display_user_balance(self):
        
        print(f"hello Mr. {self.Fname}! Your balance is {self.account_balance}")
        return self

# Tamma = BankAccount("aa", "bb",120, .02)

# Tamma.deposit(200).deposit(200).deposit(200).withdraw(300).display_user_balance()

Steve = BankAccount("steve", "bb",120, .02)
Steve.deposit(200).deposit(200).withdraw(50).withdraw(300).withdraw(20).addInterest().withdraw(300).display_user_balance()