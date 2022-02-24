import imp
from flask_app.config.mysqlconnection import connectToMySQL


class Fave:
    def __init__(self, data):
        self.authors_id = data["authors_id"]
        self.books_id = data["books_id"]
        


    @classmethod
    def allFaves(cls, data):
        query = "SELECT * FROM favorites WHERE authors_id = %(id)s;"
        results = connectToMySQL("books").query_db(query, data)

        all_fave = []
        for i in results:
            all_fave.append(cls(i))
        return all_fave

    @classmethod
    def faveAuth(cls, data):
        query = "SELECT * FROM favorites LEFT JOIN authors ON favorites.authors_id = authors.id WHERE authors_id = %(id)s;"
        results = connectToMySQL("books").query_db(query, data)
        all_books_w_authors = []

        for i in results:
            one_book = cls(i)
            author_data = {
                "id" : i["authors.id"],
                "name" : i["name"],
                "created_at" : i["friends.created_at"],
                "updated_at" : i["friends.updated_at"]
            }
            oneBook.AuthorTo = authors.Author(owner_data)
            all_books_w_authors.append(oneBook)

    # @classmethod
    # def save(cls, data):
    #     query = "INSERT INTO authors (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
    #     return connectToMySQL("books").query_db(query, data)
        


    