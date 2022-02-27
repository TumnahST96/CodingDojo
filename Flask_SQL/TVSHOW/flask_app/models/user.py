from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
import re
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class User:
    def __init__(self, data):
        self.id = data["id"]

        self.F_name = data["F_name"]
        self.L_name = data["L_name"]

        self.email = data["email"]
        self.passcode = data["passcode"]


    @staticmethod
    def validate_user(user):
        is_valid = True

        if len(user['F_name'])<3:
            flash("First name must be at least 3 Characters!!")
            is_valid = False

        if len(user['L_name'])<3:
            flash("Last name must be at least 3 Characters!!")
            is_valid = False

        if not EMAIL_REGEX.match (user['email']):
            flash("Email not right")
            is_valid = False

        if len(user['passcode'])<8:
            flash("Password is too short")
            is_valid = False

        if(user['passcode']!= user['confirm_pass']):
            flash("pass did not match!")
            is_valid = False

        return is_valid   

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("tvshows").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"
        result = connectToMySQL("tvshows").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def create_user(cls, data):
        query = "INSERT into users (F_name, L_name, email, passcode) VALUES (%(F_name)s, %(L_name)s, %(email)s, %(passcode)s);"

        result = connectToMySQL("TvShows").query_db(query, data)
        return result

    