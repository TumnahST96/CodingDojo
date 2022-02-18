
import re
from flask import Flask, render_template, request, redirect
# import the class from friend.py

from friend import Friend
# 
# @app.route("/")
# def index1():
#     # call the get all classmethod to get all friends
#     friends = Friend.all_friends()
    
app = Flask(__name__)
@app.route('/')
def index():
    friends = Friend.all_friends()
    # print(friends)
    return render_template("index.html", all_friends = friends)


# =============================
#show one friend route
#==============================
@app.route("/<int:friend_id>")
def show_friend(friend_id):
    data ={
        "id": friend_id
    }
    friend = Friend.one_friend(data)
    return render_template("show_one.html", friend = friend)

@app.route("/new_friend")
def new_friend():
    return render_template("new_friend.html")

@app.route("/create_friend", methods=["POST"])
def create_friend():
    
    data ={
        "first_name" :request.form["fname"],
        "last_name" : request.form["lname"],
        "occupation" : request.form["occ"],
    }
    friend_id = Friend.save_friend(data)
    return redirect(f"/{friend_id}")

























            
if __name__ == "__main__":
    app.run(debug=True)