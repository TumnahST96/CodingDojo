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
