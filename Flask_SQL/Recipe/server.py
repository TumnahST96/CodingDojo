from flask import Flask, render_template,redirect,session,request,session,flash
from flask_app import app

from flask_app.controllers import user_controller, recipe_controller


if __name__ == "__main__":
    app.run(debug=True,port=5000)