from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask_app.models import user, allShow

# class Likes:
#     def __init__(self, data):
#         self.users_id = data["users_id"]
#         self.shows_id = data["shows_id"]

    
#     @classmethod
#     def like_show(cls, data):
#         query = "INSERT INTO likes (users_id, shows_id) VALUES (%(users_id)s, %(shows_id)s);" 
#         return connectToMySQL("tvshows").query_db(query, data)
        
    # @classmethod
    # def get_Likes(cls):
    #     query = "SELECT * FROM likes"





