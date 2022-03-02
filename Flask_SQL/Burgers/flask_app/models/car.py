from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import flash
from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask_app.models import user
from flask import flash
class Car:
    def __init__(self, data):
        self.id = data["id"]

        self.model = data["model"]
        self.make = data["make"]
        self.price = data["price"]
        self.year = data["year"]
        self.description = data["description"]
        
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        
        self.user_id = data["user_id"]
        

        # self.aired_date = data["aired_date"]
        
    @staticmethod
    def validate_input(cars):
        is_valid = True

        if not cars['price']:
            flash("price can't be empyyt")
            is_valid = False
            
        if not cars['year']:
            flash("year can't be empyyt")
            is_valid = False

        if len(cars['model']) < 1:
            flash("Model can't be empyyt")
            is_valid = False

        if len(cars['make']) < 1:
            flash("make can't be empyyt")
            is_valid = False


        if len(cars['description'])<2:
            flash("description can't be empty")
            is_valid = False

        return is_valid 



    #================================================================================
    #Get everything from Car
    #================================================================================

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM car" 
        results = connectToMySQL("Cars").query_db(query)
        cars = []
        for i in results:
            cars.append( cls(i) )
        return cars

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
        query = "INSERT INTO car (model, make, price, year, description, created_at, updated_at, user_id) VALUES (%(model)s,  %(make)s,%(price)s, %(year)s, %(description)s,NOW(), NOW(),  %(user_id)s);"
        return connectToMySQL("Cars").query_db(query, data)
        

    #================================================================================
    #get Single info foir car
    #================================================================================     

    @classmethod
    def getSingle(cls, data):

        query = "SELECT * FROM car WHERE id = %(car_id)s"
        results = connectToMySQL("cars").query_db(query, data)

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
    def get_cars_and_users(cls):

        query = "SELECT * FROM car LEFT JOIN user ON car.user_id = user.id;"
        results = connectToMySQL("cars").query_db(query)
        all_cars_w_users = []
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
            all_cars_w_users.append(one_car)

      
        print(all_cars_w_users)
        return all_cars_w_users


    #===============================================================================
    #Saved Edited Information
    #===============================================================================
    @classmethod
    def saveEdited(cls, data):
        query = "UPDATE car SET model = %(model)s, make = %(make)s, price = %(price)s, year = %(year)s, description = %(description)s, updated_at = NOW() WHERE id = %(car_id)s;"

        return connectToMySQL("cars").query_db(query, data)


    #===============================================================================
    #DELETE
    #===============================================================================    


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM car WHERE id = %(car_id)s;"
        return connectToMySQL("cars").query_db(query, data)



    #======================================================================
    @classmethod
    def get_cars_and_users2(cls, data):

        query = "SELECT * FROM car LEFT JOIN user ON car.user_id = user.id where car.id = %(car_id)s;"
        results = connectToMySQL("cars").query_db(query, data)
        all_cars_w_users = []
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
            all_cars_w_users.append(one_car)

      
        print(all_cars_w_users)
        return all_cars_w_users



