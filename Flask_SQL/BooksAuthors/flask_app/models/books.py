import imp
from flask_app.config.mysqlconnection import connectToMySQL

class Book:
    def __init__(self, data):
        self.id = data["id"]

        self.title = data["title"]
        self.num_of_pages = data["num_of_pages"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def allbooks(cls):
        query = "SELECT * FROM books"
        results = connectToMySQL("books").query_db(query)

        all_books = []
        for i in results:
            all_books.append(cls(i))
        return all_books

    @classmethod
    def save(cls, data):
        query = "INSERT INTO books (title, num_of_pages, created_at, updated_at) VALUES (%(title)s, %(num_of_pages)s, NOW(), NOW());"
        return connectToMySQL("books").query_db(query, data)
        


    