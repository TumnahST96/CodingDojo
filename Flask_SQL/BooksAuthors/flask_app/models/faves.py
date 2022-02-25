
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import books, authors


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
        query = "SELECT * FROM favorites LEFT JOIN authors ON favorites.authors_id = authors.id left join books on books.id = favorites.books_id WHERE authors_id = %(id)s;"
        results = connectToMySQL("books").query_db(query, data)
        one_auth_w_fave = authors.Author(results[0])

        for i in results:
            book_data = {
                "id" : i["books.id"],
                "title" : i["title"],
                "num_of_pages":i["num_of_pages"],
                "created_at" : i["books.created_at"],
                "updated_at" : i["books.updated_at"]
            }
            one_auth_w_fave.books.append(books.Book(book_data))
           

        return one_auth_w_fave

    # @classmethod
    # def save(cls, data):
    #     query = "INSERT INTO authors (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
    #     return connectToMySQL("books").query_db(query, data)
        


    