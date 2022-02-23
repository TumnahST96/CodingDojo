from flask_app import app
from flask import render_template, request, redirect

from flask_app.models.dojo import Dojo
# from flask_app.models.ninja import Ninja


@app.route("/ninjas")
def new_ninja():
    dojos = Dojo.get_all_dojos()
    print (dojos)
    return render_template("new_ninja.html", dojos = dojos)