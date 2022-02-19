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
        query = "INSERT INTO pets (name, age, type, owner_id, created_at) VALUES (%(name)s, %(age)s, %(type)s, %(owner_id)s, NOW());"
        new_id = connectToMySQL("fullstack_schema").query_db(query, data)
        return new_id

    @classmethod
    def all_pets(cls):
        query = "SELECT * FROM pets;"
        results = connectToMySQL("fullstack_schema").query_db(query)
        pets = []
        for one_pet in results:
            pets.append( cls(one_pet) )
        return pets
    
    @classmethod
    def get_pets_and_owners(cls):
        # Query == We are getting all the info for Pets with the Friend info as well
        # Note that for JOIN queries, we SELECT from one table and JOIN a second/different table!
        query = "SELECT * FROM pets LEFT JOIN friends ON pets.owner_id = friends.id;"
        results = connectToMySQL("fullstack_schema").query_db(query)
        all_pets_w_owners = []
        for row in results:
            # 1 - create primary instance, in this case it is the Pet instance
            one_pet = cls(row)
            # 2 - collect the data for the secondary instance
            owner_data = {
                "id" : row["friends.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "occupation" : row["occupation"],
                "created_at" : row["friends.created_at"],
                "updated_at" : row["friends.updated_at"]
            }
            # 3 - create instance of secondary class and attach it to the primary
            # -- create instance of Friend and attach it to the one_pet
            one_pet.owner = friend.Friend(owner_data)
            # 4 - add complete Pet instance with Friend/owner to the list of pets w/ owners
            all_pets_w_owners.append(one_pet)
        # 5 - return full list
        return all_pets_w_owners


