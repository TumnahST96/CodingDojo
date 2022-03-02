from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import flash
from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask_app.model import user


class Painting:
    def __init__(self, data):
        self.id = data["id"]

        self.title = data["title"]
        self.description = data["description"]
        
        self.price = data["price"]
        
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        
        self.user_id = data["user_id"]
        

        # self.aired_date = data["aired_date"]
        
    @staticmethod
    def validate_input(painting):
        is_valid = True

        if not painting['title']:
            flash("title can't be empyyt")
            is_valid = False

        if len(painting['description'])<2:
            flash("description can't be empty")
            is_valid = False

        if not painting['price']:
            flash("price can't be empyyt")
            is_valid = False
            


        

        return is_valid 



    #================================================================================
    #Get everything from painting
    #================================================================================

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM painting" 
        results = connectToMySQL("exampy").query_db(query)
        paint = []
        for i in results:
            paint.append( cls(i) )
        return paint

    #================================================================================
    #New Car
    # "user_id" : session["user_id"],
    #     "price" : request.form["price"], 
    #     "model" : request.form["model"],
    #     "make" : request.form["make"],
    #     "year" : request.form["year"],
    #      "description" : request.form["description"]
    #================================================================================
    @classmethod
    def save(cls, data):
        query = "INSERT INTO painting (title, description, price, created_at, updated_at, user_id) VALUES (%(title)s, %(description)s, %(price)s, NOW(), NOW(),  %(user_id)s);"
        return connectToMySQL("exampy").query_db(query, data)
        

    #================================================================================
    #get Single info foir car
    #================================================================================     

    @classmethod
    def getSingle(cls, data):

        query = "SELECT * FROM painting WHERE id = %(paint_id)s"
        results = connectToMySQL("exampy").query_db(query, data)

        # resut = []

        # for i in results:
        #     resut.append(cls(i))

        return results[0]


    #================================================================================
    #get car info with seller
    # user_data = {
    #             "id" : row["users.id"],
    #             "F_name" : row["F_name"],
    #             "L_name" : row["L_name"],
    #             "email" : row["email"],
    #             "passcode": row["passcode"]

    #         }
    #================================================================================ 

    @classmethod
    def get_paint_and_users(cls):

        query = "SELECT * FROM painting LEFT JOIN user ON painting.user_id = user.id;"
        results = connectToMySQL("exampy").query_db(query)
        all_painting_w_users = []
        for row in results:
            
            one_car = cls(row)
            data = {
                "id" : row["user_id"],
                'first_name' : row["first_name"],
                'last_name' : row["last_name"],

                'email' : row["email"],
                'password' : row["password"],
                'created_at' : row["user.created_at"],
                'updated_at' : row["user.updated_at"]

                }
            one_car.users_info = user.User(data)
            all_painting_w_users.append(one_car)

      
        print(all_painting_w_users)
        return all_painting_w_users


    #===============================================================================
    #Saved Edited Information
    #===============================================================================
    @classmethod
    def saveEdited(cls, data):
        query = "UPDATE painting SET title = %(title)s,  description = %(description)s, price = %(price)s,  updated_at = NOW() WHERE id = %(paint_id)s;"

        return connectToMySQL("exampy").query_db(query, data)


    #===============================================================================
    #DELETE
    #===============================================================================    


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM painting WHERE id = %(paint_id)s;"
        return connectToMySQL("exampy").query_db(query, data)



    #======================================================================
    @classmethod
    def get_cars_and_users2(cls, data):

        query = "SELECT * FROM painting LEFT JOIN user ON painting.user_id = user.id where painting.id = %(paint_id)s;"
        results = connectToMySQL("exampy").query_db(query, data)
        all_paints_w_users = []
        for row in results:
            
            one_paint = cls(row)
            data = {
                "id" : row["user_id"],
                'first_name' : row["first_name"],
                'last_name' : row["last_name"],

                'email' : row["email"],
                'password' : row["password"],
                'created_at' : row["user.created_at"],
                'updated_at' : row["user.updated_at"]

                }
            one_paint.users_info = user.User(data)
            all_paints_w_users.append(one_paint)

      
        print(all_paints_w_users)
        return all_paints_w_users



