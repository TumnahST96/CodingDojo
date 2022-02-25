
import imp
from flask_app import app
from flask import render_template, session, redirect, request
from flask_app.models.team import Team
from flask_app.models.owner import Owner
from flask_app.models.user import User
# from flask_app.models.team import Team


@app.route("/")
def index():

    if "user_id" in session:
        
        data = {
            "id" : session["user_id"]
        }
        user = User.get_user_by_id(data)
        all_teams = Team.allTeams()
        all_owners = Owner.allOwners()
        return render_template("index.html", all_teams = all_teams, all_owners = all_owners, user = user)

    else:
        return redirect("/log_reg")
#=====================================================
#render create form

@app.route("/makeTeam")
def makeTeam():
    all_owners = Owner.allOwners()
    print(all_owners)
    return render_template("makeTeam.html", all_owners = all_owners)

#=====================================================
#render process post

@app.route("/makingTeam", methods = ['POST'])
def makingTeam():

    data = {
        "name" : request.form["name"],
        "location" : request.form["location"],
        "sports" : request.form["sports"],
        "champs" : request.form["champs"],
        "owners_id" : request.form["owner_id"]
    }
    Team.save_team(data)
    return redirect("/")

#=====================================================
#delete team

@app.route("/delete")
def delete():
    return redirect("/")

#=====================================================
#update team

# @app.route("/delete")
# def delete():
#     return redirect("/")

#=====================================================
#route to render update team form

@app.route("/updateTeam")
def updateTeam():
    return render_template("updateTeam.html")

#=====================================================
#route to process post

@app.route("/updatingTeam")
def updatingTeam():
    return redirect("/")