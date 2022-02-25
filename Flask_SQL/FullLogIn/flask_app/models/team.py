import imp
from flask_app.config.mysqlconnector import connectToMySQL




class Team:
    def __init__(self, data):
        self.id = data['id']

        self.name = data['name']
        self.location = data['location']
        self.sports = data['sports']
        self.champs = data['champs']


        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.owners_id = data["owners_id"]



    #get all the team
    @classmethod
    def allTeams(cls):
        query = "SELECT * FROM teams;"
        results = connectToMySQL("sportsdb").query_db(query)
        all_teams = []

        for i in results:
            all_teams.append(cls(i))
        
        return all_teams


    #get one team


    #save creating team

    @classmethod
    def save_team(cls, data):
        query = "INSERT INTO teams (name, location, sports, champs, owners_id, created_at, updated_at) VALUES(%(name)s,%(location)s, %(sports)s, %(champs)s, %(owners_id)s, NOW(), NOW());"
        new_id = connectToMySQL("sportsdb").query_db(query, data)
        return new_id

    #get one team