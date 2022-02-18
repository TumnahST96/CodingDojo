
from flask_app import app
from flask import  render_template, request, redirect

from flask_app.models.friend import Friend
from flask_app.models.pet import Pet
@app.route("/new_pet")
def new_pet():
    all_friends = Friend.all_friends()
    return render_template("new_pet.html", friends = all_friends)

@app.route("/create_pet", methods = ["POST"])
def create_pet():
    data = {
        "name": request.form["pet_name"],
        "age": request.form["pet_age"],
        "pet_type": request.form["pet_type"],
        "owner_id": request.form["pet_owner_id"]
    }
    #====================================
    #inser pet into pets, will insert id. 
    #====================================
    pet_id = Pet.save_pet(data)
    return("/")
