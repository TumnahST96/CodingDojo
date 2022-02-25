
import email
from flask_app import app
from flask_bcrypt import Bcrypt
from flask import render_template, session, redirect, request, flash
bcrypt = Bcrypt(app)
from flask_app.models.user import User

@app.route("/log_reg")
def log_reg():
    return render_template("log_reg.html")

@app.route("/register", methods = ['POST'])
def register():
    if not User.validate_user(request.form):
        return redirect("/log_reg")
#CHECK IF EMAIL IN DATABASE
    data = {
        "email": request.form["email"]
    }
    if User.get_by_email(data):
        flash("Email exist already")
        return redirect("log_reg")
    
    # we need to hash the password before saving
    pw_hash = bcrypt.generate_password_hash(request.form["password"])

    data = {
        "first_name" : request.form['first_name'],
        "last_name" : request.form['last_name'],
        "email" : request.form['email'],
        "password" : pw_hash
    }

    user_id = User.save(data)   
    session['user_id'] = user_id
    print(user_id)
    return redirect("/")


@app.route("/login", methods = ["POST"])
def login():
    data = {
        "email" : request.form["email"]
    }
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("you dont have an account with that email")
        return redirect("/log_reg")
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("Pass wrong. u sus!!")
        return redirect("log_reg")
    session["user_id"] = user_in_db.id

    return redirect("/")