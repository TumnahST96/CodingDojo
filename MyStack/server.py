from flask import Flask, render_template, request, redirect

app = Flask(__name__)
from user import  User

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    user = User.get_all()
    print(user)
    return render_template("index.html", get_all = user)




@app.route("/new_user")
def new_friend():
   
    
    return render_template("new_user.html")



@app.route("/create_user",methods=["POST"])
def create_user():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "first_name": request.form["fname"],
        "last_name" : request.form["lname"],
        "email" : request.form["email"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    User.save(data)
    # # Don't forget to redirect after saving to the database.
    return redirect("/")



            
if __name__ == "__main__":
    app.run(debug=True)

