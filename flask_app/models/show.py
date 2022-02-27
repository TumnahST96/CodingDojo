from sqlite3 import connect
from types import ClassMethodDescriptorType
from flask import flash
from flask_bcrypt import Bcrypt
import re
from flask_app.config.mysqlconnection import connectToMySQL


class Show:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.network = data['network']
        self.released = data['released']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # METHOD TO VALIDATE SHOW //////////////////////
    @staticmethod
    def validate_show(show):
        is_valid = True
        if len(show['title'])<3:
            flash("title must be at least 3 characters")
            is_valid = False
            
        if len(show['network'])<3:
            flash("network must be at least 3 characters")
            is_valid = False

        if len(show['description'])<3:
            flash("description must be atleast 3 characters")
            is_valid = False

        return is_valid



        # METHOD TO SAVE SHOW //////////////////////////
    @classmethod 
    def save(cls, data):
        query = "INSERT INTO show (title, network, released, description, created_at, updated_at) VALUES (%(title)s, %(network)s, %(released)s, %(description)s, NOW(), NOW(), %(user_id)s)"
        results = connectToMySQL("shows_schema").query_db(query, data)
        print(results)
        return results