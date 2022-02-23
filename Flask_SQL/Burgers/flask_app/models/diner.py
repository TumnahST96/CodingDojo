from unittest import result
from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
class Resturant:
    def __init__( self , data ):
        self.id = data['id']

        self.name = data['name']

        self.created_at = data['created_At']
        self.updated_at = data['updated_At']

@classmethod
def getRests(cls):
    query = "SELECT * FROM restaurants"
    result = connectToMySQL("burgers").query_db(query)
    dinerInfo = []
    for i in result:
        dinerInfo.append(cls(i))  
