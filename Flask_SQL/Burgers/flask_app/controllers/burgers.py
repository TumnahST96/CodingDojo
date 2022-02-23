
from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.burger import Burger

@app.route("/Burger")
def burger():
    burgers = Burger.get_all_burger()
    
    return render_template("index.html", burgers = burgers)

@app.route("/newOrder", methods=["POST"])
def newOrder():
    Burger_data = {
        "name": request.form["burger_type"],
        "meat": request.form["meat_type"],
        "bun": request.form["bread_type"],
        "restaurants_id":1
    }

    each_order = Burger.makeBurger(Burger_data)
    
    return redirect (f"/OrderComplete/{each_order}")

@app.route("/OrderComplete/<int:id>")
def complete(id):
    result = {
        "id" : id
    }
    newBig = Burger.oneBurger(result)
    return render_template("OrderComplete.html", newBig = newBig)

    #send topping sin the beginning , create topping smodels 

