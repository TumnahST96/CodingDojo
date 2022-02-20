
from contextlib import redirect_stderr
import email

from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
         #=================Step 3===========================
        #This is where code will look at user model
        #my database has is user and has a tbale user table
        #in there i have data like first name, last, and stuff
        #===================================================
        self.id = data['id']

        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        #==============================================================
        #after model is created with all the attributes here in model
        #its sent back to server.py. but server.py did call get_All class
        #method, so our function has to go through  get all after init, initial def
        #==============================================================

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user_tab;"
        results = connectToMySQL('users').query_db(query)
        uzs = []

        print(results)
        for i in results:
            uzs.append(cls(i))  #cls(i) goes to constructor init and assigns variable in respective data field

        print(uzs)
        return uzs

        ##step 3 done and returned to server 

    #create an insert method
    @classmethod
    def save(cls, data):
        query = "INSERT INTO user_tab (first_name, last_name, email, created_At, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s,  NOW(), NOW())"

        return connectToMySQL('users').query_db(query, data)


    @classmethod 
    def individualShow(cls, data):
        query = "SELECT * FROM user_tab WHERE id = %(user_id)s;"
        results = connectToMySQL('users').query_db(query, data)
        return cls(results[0])

    #=====================step 9==================
    # working with edit
    #==============================================
    @classmethod
    def individualEdit(cls, data):
        query = "UPDATE user_tab set first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(user_id)s;"
        return connectToMySQL('users').query_db(query, data)
      
       
    @classmethod
    def individualDelete(cls, data):
        query = "DELETE FROM user_tab WHERE id = %(user_id)s;"
        results =  connectToMySQL('users').query_db(query, data)
        return

