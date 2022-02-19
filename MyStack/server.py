from flask import Flask, render_template, request
# import the class from friend.py
app = Flask(__name__)
from user import  User

@app.route("/")
def index():
    # call the get all classmethod to get all friends
    user = User.get_all()
    print(user)
    return render_template("index.html", get_all = user)




#here we taken informatin from index, and add them to 
#our database and then show that they are added
#in the form of new friend
#so after adding someone, u will be directed to 
#new page aka new user. which shall be called from
#index

@app.route("/new_user",methods=["POST"])
def new_friend():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    Friend.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/')
    return render_template("new_user.html")






            
if __name__ == "__main__":
    app.run(debug=True)

