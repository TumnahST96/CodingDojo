from sqlite3 import connect
from flask_app.config.mysqlconnection import connectToMySQL




class Dojo:
    def __init__(self, data):
        self.id = data ['id']
        self.name = data ['name']
        self.created_at = data ['created_at']
        self.updated_at = data ['updated_at']


    @classmethod
    def create_dojo(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        results = connectToMySQL('dojos_ninjas_schema').query_db(query, data)
        return results[0]


    @classmethod
    def get_all_dojos(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_ninjas_schema').query_db(query)

        dojos = []
        for one_dojo in results:
            dojos.append(cls(one_dojo))

            return dojos