from select import select
from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models import friend

class Pet:
    def __init__(self, data):
        self.id = data["id"]

        self.name = data["name"]
        self.age = data["age"]
        self.type = data["type"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.owner_id = data["owner_id"]

    @classmethod
    def save_pet(cls, data):
        query = "INSERT INTO pets (name, age, type, owner_id, created_at)VALUES (%(name)s, %(age)s, %(type)s, %(owner_id)s, NOW())"
        new_id = connectToMySQL("fullstack_schema").query_db(query, data)
        return new_id
    @classmethod
    def all_pets(cls):
        query = "SELECT *FROM pets;"
        results = connectToMySQL("fullstack_schema").query_db(query)
        
        pets = []
        for one_pet in results:
            pets.append(cls(one_pet))

        return pets

    @classmethod
    def get_pets_with_owners(cls):
        query = "SELECT * from pets LEFT JOIN friends on pets.owner_id = friends.id;"
        results = connectToMySQL("fullstack_schema").query_db(query)
        all_pets_w_owners = []

        for row in results:
            print("jello ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
            print(row)
            #this is primary instance collection pet instance
            one_pet = cls(row)
            #this owner data will collect owner instances, or secondary instances
            owner_data = {
                "id" : row['friends.id'],
                "first_name": row["first_name"],
                "last_name ": row["last_name"],
                "occupation": row["occupation"],
                "created_at": row["friends.created_at"],
                "updated_at": row["friends.updated_at"]
            }

            print("jello ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

            #now attach primary and secondary instances together 

            one_pet.owner = friend.Friend(owner_data)  
            all_pets_w_owners.append(one_pet)
        return all_pets_w_owners