
from mysqlconnection import connectToMySQL
import ninja

class Dojo: 
    def __init__(self, data):
        self.id = data["id"]

        self.name = data["name"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []
    @classmethod
    def all_dojo(cls):
        query = "SELECT * from dojo;"

        results = connectToMySQL('dojonin').query_db(query)
        dojo = []

        for i in results:
            dojo.append(cls(i))

        print(dojo)
        return dojo

    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojo (name) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL('dojonin').query_db(query, data)

    
    @classmethod
    def ShowMix(cls, data):
        query = "SELECT * FROM dojo LEFT JOIN ninja ON ninja.Dojo_id = dojo.id WHERE dojo.id = %(dojo_id)s;"
        result= connectToMySQL('dojonin').query_db(query, data)
        
        one_dojo = cls(result[0])
        for i in result:
           

            ninja_data = {
               "id" : i["ninja.id"],

               "first_name" : i["first_name"],
               "last_name" : i["last_name"],
               "age" : i["age"],

               "created_at" : i["ninja.created_at"],
               "updated_at" : i["ninja.updated_at"],
               "Dojo_id" : i["Dojo_id"]

            }

            one_dojo.ninjas.append(ninja.Ninja(ninja_data))
           

        return one_dojo

    