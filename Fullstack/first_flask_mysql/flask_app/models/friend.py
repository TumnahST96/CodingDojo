# import the function that will return an instance of a connection

from flask_app.config.mysqlconnection import connectToMySQL
# model the class after the friend table from our database
class Friend:
    def __init__( self , data ):
        self.id = data['id']

        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']

        self.created_at = data['created_at']
        self.updated_at = data['updated_At']
    # Now we use class methods to query our database
    @classmethod
    def all_friends(cls):
        query = "SELECT * FROM friends;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('fullstack_schema').query_db(query)
        # print(results)
        # Create an empty list to append our instances of friends
        all_friends = []
        # Iterate over the db results and create instances of friends with cls.
        for friend in results:
            all_friends.append( cls(friend) )
        return all_friends

       

    @classmethod
    def one_friend(cls, data):
        query = "SELECT * FROM friends WHERE id = %(id)s ;"
        results = connectToMySQL("fullstack_schema").query_db(query, data)
        return cls(results[0])

    @classmethod
    def save_friend(cls, data):
        query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(occupation)s, NOW(), NOW());"
        new_id = connectToMySQL("fullstack_schema").query_db(query, data)
        return new_id