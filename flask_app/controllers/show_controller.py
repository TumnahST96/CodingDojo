from flask_app import app
from flask_bcrypt import Bcrypt
from flask import render_template, redirect, session, request
bcrypt = Bcrypt(app)

from flask_app.models.show import Show



@app.route("/new/<int:user_id>")
def new_show(user_id):
    user_id = user_id
    return render_template("new_show.html", user_id = user_id)


@app.route("/create_show/<int:user_id>", methods=["POST"])
def create_show(user_id):
    user_id = user_id
    data = {
        "title" : request.form["title"],
        "network" : request.form["network"],
        "description" : request.form["description"],
        "created_at" : request.form["created_at"],
        "user_id" : user_id
    }
    
    show_id = Show.save(data)
    return render_template("dashboard.html")


