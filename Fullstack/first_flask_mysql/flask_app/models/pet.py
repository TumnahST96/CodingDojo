from flask_app.config.mysqlconnection import connectToMySQL

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
        query = "INSERT INTO pets (name, age, type, owner_id, created_at)VALUES (%(name)s, %(age)s, %(type)s, %(owner_id)s, NOW());"
        new_pet_id = connectToMySQL("fullstack_schema").query_db(query, data)
        return new_pet_id