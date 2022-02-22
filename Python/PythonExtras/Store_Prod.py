from itertools import product
from unicodedata import category, name





class Product ():
    def __init__(self, Product_Name, price, category):
        self.Product_Name = Product_Name
        self.price = price
        self.category = category
       

    def ProdClass(self, name, price, category):
        pass

    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price = self.price + self.price*percent_change

        else:
            self.price = self.price - self.price*percent_change

    def print_info(self):
        print(f"name of product is {{self.name}} amnd the price is {{self.price}} and it falls under {{self.category}} category")


class Store (Product):
    def __init__(self, StoreName, prodList):
        self.StoreName = StoreName
        self.prodList = prodList

    def add_product(self, new_product):
        self.prodList.append(new_product)

    def sell_product(self, id):
        self.prodList.remove(id)

    def inflation(self, percent_increase):
        for i in self.prodList:
            super.update_price(percent_increase, True)
            

    def set_clearance(self, category, percent_discount):
        for i in self.prodList:

            super.update_price(percent_increase, True)

            
#Test out your classes by creating an instance of the Store and a few 
# instances of the Product class, add those instances to the store 
# instance, and then test out the methods.