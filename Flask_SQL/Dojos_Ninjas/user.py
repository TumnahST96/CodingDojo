import imp
from unittest import result
from flask import flash
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt
import re

class User:
    def __init__(self, data):
        self.id = data['id']

        self.first_name = data['first_name']
        self.last_name = data['last_name']

        self.email = data['email']
        self.password = data['password']
        
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['first_name'])<5:
            flash("Your first name is too short!")
        if len(user['last_name'])<5:
            flash("Your last name is too short!")
        if not EMAIL_REGEX.match(user['first_name'])<5:
            flash("email wrong")
            is_valid = False
        if len(user['password'])<8:
            flash("Your password is too short!")
            is_valid = False
        if (user['password']!= user['confirm_password']):
            flash("Confirm no match pass!")
            is_valid = False
        return is_valid

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW())"
        results = connectToMySQL("dojonin").query_db(query, data)
        return results


    @classmethod
    def get_by_email(cls, data):
        query = "SELECT *from users where email = %(email)s;"
        result = connectToMySQL("dojonin").query_db(query, data)

        if len(result)<1:
            return False
        return cls(result[0])

    
    @classmethod
    def get_by_user_by_id(cls, data):
        query = "SELECT *from users WHERE id = %(id)s;"
        result = connectToMySQL("dojonin").query_db(query, data)

        if len(result)<1:
            return False
        return cls(result[0])