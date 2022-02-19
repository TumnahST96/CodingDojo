
import email
from mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
        self.id = data['id']

        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user_tab;"
        results = connectToMySQL('users').query_db(query)
        uzs = []

        print(results)
        for i in results:
            uzs.append(cls(i))

        print(uzs)
        return uzs

    #create an inser method
    @classmethod
    def save(cls, data):
        query = "INSERT INTO user_tab (first_name, last_name, email, created_At, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s,  NOW(), NOW())"

        return connectToMySQL('users').query_db(query, data)
       
        

