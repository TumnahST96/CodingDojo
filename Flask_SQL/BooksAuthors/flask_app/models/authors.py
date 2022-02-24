import imp
from flask_app.config.mysqlconnection import connectToMySQL

class Author:
    def __init__(self, data):
        self.id = data["id"]

        self.name = data["name"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def allAuthors(cls):
        query = "SELECT * FROM authors"
        results = connectToMySQL("books").query_db(query)

        all_auth = []
        for i in results:
            all_auth.append(cls(i))
        return all_auth

    @classmethod
    def save(cls, data):
        query = "INSERT INTO authors (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL("books").query_db(query, data)
        


    