from flask_app import app
from flask import  render_template, request, redirect


@app.route("/new_pet")
def new_pet():
    return render_template("new_pet.html")