
from mysqlconnection import connectToMySQL

class Dojo: 
    def __init__(self, data):
        self.id = data["id"]

        self.name = data["name"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def all_dojo(cls):
        query = "SELECT * from dojo;"

        results = connectToMySQL('dojonin').query_db(query)
        dojo = []

        for i in results:
            dojo.append(cls(i))

        print(dojo)
        return dojo

    classmethod
    def save(cls, data):
        query = "INSERT INTO dojo (name) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL('dojonin').query_db(query, data)