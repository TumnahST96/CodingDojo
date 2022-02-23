from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.diner import Resturant
from flask_app.config.mysqlconnection import connectToMySQL

@app.route("/")
def startsHere():
    data = Resturant.getRests()
    
    return render_template("restar.html", data = data)