
from flask_app import app
from flask_app.models.allShow import Show
from flask_app.models.user import User
# from flask_app.models.likes import Likes
from flask import render_template, session, redirect, request, flash



#==========================
@app.route("/Dashboard")
def dashboard():
    
    data = {
        "user_id" : session["user_id"]
    }


    user_info = User.get_by_id(data)
    allShow = Show.get_all()
    # ic
    return render_template("dashboard.html", allShow = allShow, user_info = user_info)

@app.route("/addShows")
def addShow():
    
    data = {
        "user_id" : session["user_id"]
    }
    user_info = User.get_by_id(data)
    return render_template("addShow.html", user_info = user_info)



@app.route("/create_show", methods = ["POST"])
def create_show():
    if not Show.validate_input(request.form):
        return redirect("/addShows")
    data = {
        "user_id" : session["user_id"],
        "title" : request.form["title"], 
        "network" : request.form["network"],
         "created_at" : request.form["released"], 
         "description" : request.form["description"]


    }
    new_show = Show.save(data)
    return redirect ("/Dashboard")

@app.route("/<int:id>/show")
def showSingle(id):

    data = {
        "show_id" : id 
    }


    showThis = Show.get_shows_and_users(data)

    print(showThis)

    return render_template("show.html", showThis = showThis)

@app.route("/<int:show_id>/edit")
def editSingle(show_id):
   
    data = {
        "show_id" : show_id
    }
   
    info = Show.getSingle(data)
    
    return render_template("editShow.html", info = info)

# /user_id/show_id/editYourShow"

@app.route("/<int:show_id>/editYourShow", methods = ["POST"])
def editYourShow(show_id):
    show_id = show_id
    data = {
        "show_id" : show_id,
        "title" : request.form["title"], 
        "network" : request.form["network"],
        "created_at" : request.form["released"], 
        "description" : request.form["description"]



    }
    edit_show = Show.saveEdited(data)
    return redirect ("/Dashboard")

# /{{i.id}}/delete

@app.route("/<int:show_id>/delete")
def deleteThis(show_id):
    show_id = show_id
    data = {
        "show_id" : show_id
    }

    deleted = Show.delete(data)
    return redirect ("/Dashboard")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")














# mapping error = create a dictionary and send data

