class user:
    def __init__(self, fName, lname):
        self.fName = fName
        self.lname = lname
        self.account_balance = 0
    def make_withdraw(self, amount):
            self.account_balance-=amount
            return self
    def make_Deposit(self, amount):
            self.account_balance+=amount
            return self
    def display_user_balance(self):
         print(f"hello Mr. {self.fName}! Your balance is {self.account_balance}")
         return self
    # def transfer()

guido = user("aa", "bb")
guido.make_Deposit(500).make_Deposit(500).make_Deposit(500).display_user_balance()

genie = user("ap", "le")
genie.make_Deposit(100).make_Deposit(1200).make_withdraw(1100).display_user_balance()
nahi = user ("nahi", "nom")
nahi.make_Deposit(1200).make_withdraw(500).make_withdraw(20).make_withdraw(50).display_user_balance()

genie.make_withdraw(50).display_user_balance()
nahi.make_Deposit(50).display_user_balance()


# class BankAccount:
#     # ... __init__ goes here
#     def with_draw(self,amount):
#         # we can use the static method here to evaluate
#         # if we can with draw the funds without going negative
#         if BankAccount.can_withdraw(self.balance,amount):
#             self.balance -= amount
#         else:
#             print("Insufficient Funds")
#         return self    
#     # static methods have no access to any attribute
#     # only to what is passed into it
#     @staticmethod
#     def can_withdraw(balance,amount):
#     	if (balance - amount) < 0:
# 	    return False
#         else:
# 	    return True



# class BankAccount:
#     # class attribute
#     bank_name = "First National Dojo"
#     all_accounts = []
#     def __init__(self, int_rate,balance):
#         self.int_rate = int_rate
#         self.balance = balance
#         BankAccount.all_accounts.append(self)
#     
#     # class method to change the name of the bank
#     @classmethod
#     def change_bank_name(cls,name):
#         cls.bank_name = name
#     # class method to get balance of all accounts
#     @classmethod
#     def all_balances(cls):
#         sum = 0
#         # we use cls to refer to the class
#         for account in cls.all_accounts:
#             sum += account.balance
#         return sum
