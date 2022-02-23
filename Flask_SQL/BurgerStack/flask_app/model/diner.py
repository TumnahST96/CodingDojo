
from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
class Resturant:
    def __init__( self , data ):
        self.id = data['id']

        self.name = data['name']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def dinerInfo(cls):
        query = "SELECT * FROM restaurants"
        result = connectToMySQL("burgers").query_db(query)
        dinerInfo = []
        for i in result:
            dinerInfo.append(cls(i)) 

        return dinerInfo

    @classmethod
    def Insert(cls):
        query = "INSERT INTO RESTAURANTS (name, created_at, updated_at) VALUES (%(name)s,%(created_at)s, %(updated_at)s);"
        return