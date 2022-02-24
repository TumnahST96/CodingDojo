
from flask import Flask, render_template, redirect, request

app = Flask(__name__)
from dojo import Dojo
from ninja import Ninja



@app.route("/")
def index():
    dojo = Dojo.all_dojo()
    return render_template("index.html", all_dojo = dojo)


@app.route("/new_Ninja")
def new_Ninja():

    dojos = Dojo.all_dojo()
    return render_template("new_ninja.html", dojos = dojos)

@app.route("/create_Ninja", methods=["POST"])
def create_Ninja():
    data = {
        "Dojo_id": request.form["dojo_id"],
        "first_name" : request.form["fname"],
        "last_name" : request.form["lname"],
        "age" : request.form["age"]
    }
    nin_id= Ninja.saveNinja(data)
    return redirect("/")

@app.route("/show_all_Ninja")
def show_all():
    all_ninja = Ninja.all_ninja()
    return render_template("show_ninja.html", all_ninja = all_ninja)



@app.route("/<int:dojo_id>")
def mixed(dojo_id):
    data = {
        "dojo_id": dojo_id
    }
    dojo = Dojo.ShowMix(data)
    return render_template("mixed.html", dojo = dojo)


#LANDING PAGE FOR LOGIN AND REG
@app.route("/log_reg")
def log_reg():
    return render_template("log_reg.html")



#PROCESSING REGISTRATION
@app.route(".registration")
def register():


    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"],
        "password" : request.form["password"]

        
    }
    return redirect("/")



#PROCESSING LOGIN























if __name__ == "__main__":
    app.run(debug=True)