class user:
    def __init__(self, fName, lname):
        self.fName = fName
        self.lname = lname
        self.account_balance = 0
    def make_withdraw(self, amount):
            self.account_balance-=amount
    def make_Deposit(self, amount):
            self.account_balance+=amount
    def display_user_balance(self):
         print(f"hello Mr. {self.fName}! Your balance is {self.account_balance}")
    # def transfer()

guido = user("aa", "bb")
guido.make_Deposit(500)
guido.make_Deposit(500)
guido.make_Deposit(500)
guido.make_withdraw(50)
guido.display_user_balance()
genie = user("ap", "le")
genie.make_Deposit(100)
genie.make_Deposit(1200)
genie.make_withdraw(1100)
genie.display_user_balance()
nahi = user ("nahi", "nom")
nahi.make_Deposit(1200)
nahi.make_withdraw(500)
nahi.make_withdraw(20)
nahi.make_withdraw(50)
nahi.display_user_balance()

genie.make_withdraw(50)
nahi.make_Deposit(50)
genie.display_user_balance()
nahi.display_user_balance()
