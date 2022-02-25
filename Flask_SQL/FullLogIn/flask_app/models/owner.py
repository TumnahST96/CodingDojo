from flask_app.config.mysqlconnector import connectToMySQL
from flask_app.models import team


class Owner:
    def __init__(self, data):
        self.id = data['id']

        self.first_name = data['first_name']
        self.last_name = data['last_name']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.teams = []

   


    #all owner
    @classmethod
    def allOwners(cls):
        query = "SELECT * FROM owners;"
        results = connectToMySQL("sportsdb").query_db(query)
        all_owners = []

        for i in results:
            all_owners.append(cls(i))
        
        return all_owners

    #get owner with teams
    @classmethod
    def get_owner_with_teams(cls, data):
        query = "SELECT * from owners left JOIN teams on owners.id = teams.owners_id WHERE owners.id = %(id)s;"
        results = connectToMySQL("sportsdb").query_db(query, data)
        owners = []
        owner = cls(results[0])
        for i in results:
            
            team_data = {
                "id" : i["teams.id"], 
                "name" : i["name"], 
                "location" : i["location"],
                "sports" :  i["sports"],
                "champs" : i["champs"], 
                "created_at": i["teams.created_at"],
                "updated_at" : i["teams.updated_at"],
                "owners_id" : i["owners_id"]
            
            }
            owner.teams.append(team.Team(team_data))
            #  = team.Team(team_data)
            # owners.append(owner)

        return owner

    @classmethod
    def save_owner(cls, data):
        query = "INSERT INTO owners (first_name, last_name, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, NOW(), NOW());"
        new_id = connectToMySQL("sportsdb").query_db(query, data)
        return new_id
    @classmethod
    def allTeams(cls):
        query = "SELECT * FROM teams;"
        results = connectToMySQL("sportsdb").query_db(query)
        all_teams = []

        for i in results:
            all_teams.append(cls(i))
        
        return all_teams


    @classmethod
    def one_owner(cls, data):
        query = "SELECT * FROM owners WHERE id = %(id)s;"
        results = connectToMySQL("sportsdb").query_db(query, data)
        return cls(results[0])

    @classmethod
    def delete (cls, data):
        query = "DELETE FROM owners WHERE id = %(id)s;"
        return connectToMySQL("sportsdb").query_db(query, data)
        
    @classmethod
    def Updating(cls, data):
        query = "UPDATE owners SET first_name = %(first_name)s, last_name = %(last_name)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL("sportsdb").query_db(query, data)