import imp
from flask_app import app
from flask_bcrypt import Bcrypt
from flask_app.models.user import User
# from flask_app.model.message import Message
from flask import render_template, session, redirect, request, flash
bcrypt = Bcrypt(app)



#======================================================================
#Default
#======================================================================

@app.route("/")
def index():
    return render_template ("index.html")

#======================================================================
#Dash Board
#======================================================================

@app.route("/Dashboard")
def dashboard():
    
    data = {
        "this_id" : session["user_id"]
    }
    single = User.get_by_id(data)
    all_user = User.get_all()

    print(single)

    return render_template("dashboard.html", single = single)

#======================================================================
#Login
#======================================================================

@app.route("/user_login", methods = ["POST"])
def user_login():
    
    data = {
        "email" : request.form["email"],
        # "passcode" : request.form["passcode"]
    }
  

    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("Invalid Email")
        return redirect("/")


    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Invalid Password")
        return redirect("/")
    
    session["user_id"] = user_in_db.id
    return redirect("/Dashboard")
#======================================================================
#Register form
#======================================================================

@app.route("/register", methods = ["POST"])
def register():

    if not User.validate_user(request.form):
        return redirect("/")

    data = {
        "email" : request.form["email"]
    }

    if User.get_by_email(data):
        flash("Email already exist in database")
        return redirect("/")

    pw_hash = bcrypt.generate_password_hash(request.form["password"])
    data = {
        'first_name' : request.form["first_name"],
        'last_name' : request.form["last_name"],

        'email' : request.form["email"],
        'password' : pw_hash

        # "confirm_pass" : pw_hash1
    }
    user_id = User.save(data)
    session["user_id"] = user_id
    return redirect("/Dashboard")


    