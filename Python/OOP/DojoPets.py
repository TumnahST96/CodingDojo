class Ninja:
   def  __init__(self, first_name , last_name , treats , pet_food , pet):
       self.first_name = first_name
       self.last_name = last_name
       self.treats = treats
       self.pet_food = pet_food
       self.pet = pet

        	
   def walk(self):
        print(f"{self.first_name} takes {self.pet} on a Walk tp park")
   def feed(self):
        print("eat chicken")
   def bath(self):
        print("Bath is nooo")


class Pet(Ninja):
    def __init__(self, name , type , tricks, energy, health):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = energy
        self.health = health
        
    def sleep(self):
        self.energy+=25
    def eat(self):
        super().feed()
        self.energy+=5
        self.health+=10
        return self
    def play(self):
        self.health+=5

    def noise(self):
        print(f"Woof,woof,  I have {self.health} and {self.energy}")






rob = Ninja('ron', 'sty', 'chicken', 'more chicken', 'dog')

misty = Pet('misty', 'dog','run fast', 0, 0)

misty.eat().noise()