
from flask_app import app
from flask_app.model.user import User
from flask_app.model.painting import Painting
from flask import render_template, session, redirect, request, flash



#===================================================================================================
#Dashboard
#===================================================================================================
@app.route("/Dashboard")
def dashboard():
    
    data = {
        "this_id" : session["user_id"]
    }
    
    user_info = User.get_by_id(data)
    print(user_info)
    the_other = Painting.get_paint_and_users()
    # print(all_info[0].cars.model)

    return render_template("dashboard.html", user_info = user_info,  the_other = the_other)

#===================================================================================================
#Add paint route
#===================================================================================================

@app.route("/addPainting")
def addCars():
    
    
    user_id = session["user_id"]
    
    # user_info = User.get_by_id(data)
    return render_template("addCar.html", user_info = user_id)


#===================================================================================================
#add paint form
#===================================================================================================


@app.route("/create_paint", methods = ["POST"])
def create_car():
    
    print(session["user_id"])
    data = {
        "user_id" : session["user_id"],
        "title" : request.form["title"],
        
        "description" : request.form["description"],
        "price" : request.form["price"]


    }
    if not Painting.validate_input(data):
        return redirect("/addPainting")

    new_paint= Painting.save(data)
    return redirect ("/Dashboard")
#===========================================================
#Show
#===========================================================

@app.route("/<int:id>/show")
def showSingle(id):
    id = id
    data = {
        "paint_id" : id 
    }


    showThis = Painting.get_cars_and_users2(data)

    print(showThis)

    return render_template("show.html", showThis = showThis)

#===========================================================
#Edit
#===========================================================

@app.route("/<int:paint_id>/edit")
def editSingle(paint_id):
   
    data = {
        "paint_id" : paint_id
    }
   
    info = Painting.getSingle(data)
    print(info)
    
    return render_template("editpaint.html", info = info)

# /{{info.id}}/editYourCar

#===========================================================
#Edit form process
#===========================================================

@app.route("/<int:paint_id>//editYourPaint", methods = ["POST"])
def editYourcar(paint_id):
    paint_id = paint_id
    data = {
        "paint_id" : paint_id,
        "title" : request.form["title"],
        "price" : request.form["price"], 
        "description" : request.form["description"]

    }
    if not Painting.validate_input(data):
        return redirect(f"/{paint_id}/edit")
    edit_show = Painting.saveEdited(data)
    return redirect ("/Dashboard")


#===========================================================
#DELETE
#===========================================================

# # /{{i.id}}/delete

@app.route("/<int:paint_id>/delete")
def deleteThis(paint_id):
    paint_id = paint_id
    data = {
        "paint_id" : paint_id
    }

    deleted = Painting.delete(data)
    return redirect ("/Dashboard")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")














# # mapping error = create a dictionary and send data

