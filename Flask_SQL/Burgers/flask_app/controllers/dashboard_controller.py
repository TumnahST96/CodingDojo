
from flask_app import app
from flask_app.models.user import User
from flask_app.models.car import Car
from flask import render_template, session, redirect, request, flash



#==========================
@app.route("/Dashboard")
def dashboard():
    
    data = {
        "user_id" : session["user_id"]
    }

    user_info = User.get_by_id(data)
    car_info = Car.get_all()
    all_info = User.get_user_with_car()
    the_other = Car.get_cars_and_users()
    print(all_info[0].cars.model)
    
    # ic
    return render_template("dashboard.html", user_info = user_info, car_info = car_info, all_info = all_info, the_other = the_other)

@app.route("/addCars")
def addCars():
    
    
    user_id = session["user_id"]
    
    # user_info = User.get_by_id(data)
    return render_template("addCar.html", user_info = user_id)



@app.route("/create_car", methods = ["POST"])
def create_car():
    
    print(session["user_id"])
    data = {
        "user_id" : session["user_id"],
        "price" : request.form["price"], 
        "model" : request.form["model"],
        "make" : request.form["make"],
        "year" : request.form["year"],
        "description" : request.form["description"]


    }
    if not Car.validate_input(data):
        return redirect("/addCars")

    new_car= Car.save(data)
    return redirect ("/Dashboard")
#===========================================================
#Show
#===========================================================

@app.route("/<int:id>/show")
def showSingle(id):
    id = id
    data = {
        "car_id" : id 
    }


    showThis = Car.get_cars_and_users2(data)

    print(showThis)

    return render_template("show.html", showThis = showThis)

#===========================================================
#Edit
#===========================================================

@app.route("/<int:car_id>/edit")
def editSingle(car_id):
   
    data = {
        "car_id" : car_id
    }
   
    info = Car.getSingle(data)
    
    return render_template("editCar.html", info = info)

# /{{info.id}}/editYourCar

@app.route("/<int:car_id>/editYourCar", methods = ["POST"])
def editYourcar(car_id):
    car_id = car_id
    data = {
        "car_id" : car_id,
        "price" : request.form["price"], 
        "model" : request.form["model"],
        "make" : request.form["make"],
        "year" : request.form["year"],
        "description" : request.form["description"]

    }
    if not Car.validate_input(data):
        return redirect(f"/{car_id}/edit")
    edit_show = Car.saveEdited(data)
    return redirect ("/Dashboard")


#===========================================================
#DELETE
#===========================================================

# # /{{i.id}}/delete

@app.route("/<int:car_id>/delete")
def deleteThis(car_id):
    car_id = car_id
    data = {
        "car_id" : car_id
    }

    deleted = Car.delete(data)
    return redirect ("/Dashboard")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")














# mapping error = create a dictionary and send data

