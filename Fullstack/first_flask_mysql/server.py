from flask import Flask, render_template
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



























            
if __name__ == "__main__":
    app.run(debug=True)