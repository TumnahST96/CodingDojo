from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

# from flask_app.controllers import register_controller
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class User:
    def __init__(self, data):
        self.id = data["id"]

        self.first_name = data["first_name"]
        self.last_name = data["last_name"]

        self.email = data["email"]
        self.password = data["password"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @staticmethod
    def validate_user(user):
        is_valid = True

        if len(user['first_name'])<3:
            flash("First name must be at least 3 Characters!!")
            is_valid = False

        if len(user['last_name'])<3:
            flash("Last name must be at least 3 Characters!!")
            is_valid = False

        if not EMAIL_REGEX.match (user['email']):
            flash("Email not right")
            is_valid = False

        if len(user['password'])<8:
            flash("Password is too short")
            is_valid = False

        if(user['password']!= user['confirm']):
            flash("pass did not match!")
            is_valid = False

        return is_valid   


    #================================================================================
    #Insert into database
    #================================================================================

    @classmethod
    def save(cls, data):
        query = "INSERT into user (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"
        result = connectToMySQL("examPy").query_db(query, data)
        return result

    #================================================================================
    #get data using email
    #================================================================================
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM user WHERE email = %(email)s;"
        result = connectToMySQL("examPy").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    #================================================================================
    #get all data
    #================================================================================
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user;"
        result = connectToMySQL("examPy").query_db(query) 
        return result

    #================================================================================
    #get data using id
    #================================================================================
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM user WHERE id = %(this_id)s;"
        result = connectToMySQL("examPy").query_db(query,data)
        
        if len(result) < 1:
            return False
        return cls(result[0])


        