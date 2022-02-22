
from mysqlconnection import connectToMySQL

from flask import Flask, render_template, redirect, request
from dojo import Dojo

class Ninja: 
    def __init__(self, data):
        self.id = data["id"]

        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.age = data["age"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    
        self.Dojo_id = data["Dojo_id"]



    @classmethod
    def all_ninja(cls):
        query = "SELECT * from ninja;"

        results = connectToMySQL('dojonin').query_db(query)
        ninja = []

        for i in results:
            ninja.append(cls(i))

        print(ninja)
        return ninja

    @classmethod
    def saveNinja(cls, data):
        query = "INSERT INTO ninja (first_name, last_name, age, created_at, updated_at, Dojo_id) VALUES (%(first_name)s,%(last_name)s,%(age)s, NOW(), NOW(), %(Dojo_id)s);"
        return connectToMySQL('dojonin').query_db(query, data)

    @classmethod
    def ShowMix(cls):
        query = "SELECT * FROM dojo LEFT JOIN ninja on ninja.Dojo_id = dojo.id;"
        result= connectToMySQL('dojonin').query_db(query)
        all_dojos_nin = []
        for i in result:
            one_nin = cls(i)

            dojo_data = {
              "id" : i["dojo.id"],
              "name" : i["dojo.name"],

              "created_at" : i["dojo.created_at"],
              "updated_at" : i["dojo.updated_at"]
            }

            one_nin.mutual = dojo.Dojo(dojo_data)
            all_dojos_nin.append(one_nin)

        return all_dojos_nin