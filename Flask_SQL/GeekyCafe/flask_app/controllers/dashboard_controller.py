from flask_app import app
from flask_app.models.user import User

from flask import render_template, session, redirect, request, flash

#======================================================================
#logout
#======================================================================

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

