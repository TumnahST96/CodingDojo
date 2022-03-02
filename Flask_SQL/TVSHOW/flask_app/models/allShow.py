from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import flash
from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask_app.models import user
from flask import flash
class Show:
    def __init__(self, data):
        self.id = data["id"]

        self.title = data["title"]
        self.network = data["network"]


        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.description = data["description"]
        self.user_id = data["user_id"]

        # self.aired_date = data["aired_date"]
        
    @staticmethod
    def validate_input(shows):
        is_valid = True

        if len(shows['title'])<0:
            flash("title can't be empyyt")
            is_valid = False

        if len(shows['network'])<3:
            flash("network can't be empyyt")
            is_valid = False

        if len(shows['description'])<2:
            flash("description can't be empty")
            is_valid = False




        return is_valid 
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM shows" 
        results = connectToMySQL("tvshows").query_db(query)
        users = []
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def save(cls, data):
        query = "INSERT INTO shows (title, network, created_at, description, user_id) VALUES (%(title)s, %(network)s, %(created_at)s, %(description)s, %(user_id)s);"
        results = connectToMySQL("tvshows").query_db(query, data)
        print(results)
        return results

    @classmethod
    def getSingle(cls, data):

        query = "SELECT * FROM shows WHERE id = %(show_id)s"
        results = connectToMySQL("tvshows").query_db(query, data)

        # resut = []

        # for i in results:
        #     resut.append(cls(i))

        return results[0]

    @classmethod
    def get_shows_and_users(cls, data):

        query = "SELECT * FROM shows LEFT JOIN users ON shows.user_id = users.id WHERE shows.id = %(show_id)s;"
        results = connectToMySQL("tvshows").query_db(query, data)
        all_shows_w_users = []
        for row in results:
            
            one_show = cls(row)
            
            user_data = {
                "id" : row["users.id"],
                "F_name" : row["F_name"],
                "L_name" : row["L_name"],
                "email" : row["email"],
                "passcode": row["passcode"]

            }
            # 3 - create instance of secondary class and attach it to the primary
            # -- create instance of Friend and attach it to the one_show
            one_show.user = user.User(user_data)
            # 4 - add complete show instance with Friend/user to the list of shows w/ users
            all_shows_w_users.append(one_show)

        # 5 - return full list
        print(all_shows_w_users)
        return all_shows_w_users

    @classmethod
    def saveEdited(cls, data):
        query = "UPDATE shows SET title = %(title)s, network = %(network)s, created_at = %(created_at)s, description = %(description)s WHERE id = %(show_id)s;"

        return connectToMySQL("tvshows").query_db(query, data)


        
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM shows WHERE id = %(show_id)s;"
        return connectToMySQL("tvshows").query_db(query, data)


