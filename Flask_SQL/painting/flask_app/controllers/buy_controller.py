from flask_app import app
from flask_app.model.user import User
from flask_app.model.Buy import Buying
from flask_app.model.painting import Painting
from flask import render_template, session, redirect, request, flash

#/showThis.id/buy

@app.route("/<int:paint_id>/buy")
def buy_paint(paint_id):
    print("heloooo***********************************************")
    data = {
        "paint_id":paint_id,
        "user_id": session['id']
    }
    Buying.buy_paint(data)
    return redirect('/Dashboard')