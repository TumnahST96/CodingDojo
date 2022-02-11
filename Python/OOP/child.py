
from parent import Parent, User


class Child(Parent):
    def method_a(self):
        print("invoking CHILD method_a!")

son = Child()

son.method_a() 





user = User("Anna")
print(user.name)
print(user.say_hello())

# print(__name__)

dad = Parent()
dad.method_a()