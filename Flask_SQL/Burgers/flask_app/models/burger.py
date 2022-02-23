
from flask_app.config.mysqlconnection import connectToMySQL
class Burger:
    def __init__( self , data ):
        self.id = data['id']

        self.name = data['name']
        self.bun = data['bun']
        self.meat = data['meat']
        self.calories = data['calories']

        self.created_at = data['created_At']
        self.updated_at = data['updated_At']
        # We now create a list so that later we can add in all the topping objects that relate to a burger.
        self.toppings = []


    # This method will retrieve the burger with all the toppings that are associated with the burger.
    # @classmethod
    # def get_burger_with_toppings( cls , data ):
    #     query = "SELECT * FROM burgers LEFT JOIN add_ons ON add_ons.burger_id = burgers.id LEFT JOIN toppings ON add_ons.topping_id = toppings.id WHERE burgers.id = %(id)s;"
    #     results = mysqlconnection.connectToMySQL('burgers').query_db( query , data )
    #     # results will be a list of topping objects with the burger attached to each row. 
    #     burger = cls( results[0] )
    #     for row_from_db in results:
    #         # Now we parse the topping data to make instances of toppings and add them into our list.
    #         topping_data = {
    #             "id" : row_from_db["toppings.id"],
    #             "topping_name" : row_from_db["topping_name"],
    #             "created_at" : row_from_db["toppings.created_at"],
    #             "updated_at" : row_from_db["toppings.updated_at"]
    #         }
    #         burger.toppings.append( topping.Topping( topping_data ) )
    #         return burger

    @classmethod
    def get_all_burger(cls):
        query = "SELECT * FROM burger"
        result = connectToMySQL("burgers").query_db(query)
        burgie = []
        for i in result:
            burgie.append(cls(i))
        return burgie

    @classmethod
    def makeBurger(cls, data):
        query = "INSERT INTO burger (name, bun, meat, created_At, updated_At, restaurants_id)  VALUES (%(name)s, %(bun)s, %(meat)s, NOW(), NOW(), %(restaurants_id)s);"
        return connectToMySQL('burgers').query_db(query, data)

    @classmethod
    def oneBurger(cls, data):
        query = "select * from burger where burger.id = %(id)s;"
        result = connectToMySQL('burgers').query_db(query, data)
        return cls(result[0])
