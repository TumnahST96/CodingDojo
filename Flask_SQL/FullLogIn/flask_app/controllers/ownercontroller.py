
import imp
from flask_app import app
from flask import render_template, session, redirect, request
from flask_app.models.owner import Owner

@app.route("/makeOwner")
def makeOwner():
    return render_template("makeOwner.html")


@app.route("/makingOwner", methods=["POST"])
def making_owner():
    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"]

    }
    owner_id = Owner.save_owner(data)
    return redirect("/")

@app.route("/owner/<int:owner_id>")
def show_owner(owner_id):
    data = {
        "id" : owner_id
    }
    owner = Owner.get_owner_with_teams(data)
    return render_template("one_owner.html", owner = owner)


#===========================================================
#delete
@app.route("/delete/<int:id>")
def delete_owner(id):
    data = {
        "id" : id
    }
    Owner.delete(data)
    return redirect("/")

@app.route("/update/<int:id>")
def update_owner(id):
    data = {
        "id" : id
    }
    owner = Owner.one_owner(data)
    return render_template("update.html", owner = owner)

@app.route("/updating/<int:id>", methods=["POST"])
def updating_owner(id):
    data = {
        "id" : id,
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"]

    }
    Owner.Updating(data)
    return redirect("/")
