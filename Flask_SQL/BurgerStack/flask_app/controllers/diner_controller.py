import imp
from flask import render_template, redirect, request
from flask_app import app
from flask_app.model.diner import Resturant


@app.route("/")
def startsHere():
    data = Resturant.dinerInfo()
    
    return render_template("index.html", data = data)

@app.route("/new_diner")
def new_diner():
    return redirect("new_place.html")
    # data = Resturant.Insert()