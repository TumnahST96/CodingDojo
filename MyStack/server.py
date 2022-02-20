
from flask import Flask, render_template, request, redirect

app = Flask(__name__)
from user import  User

#=================Step 1==================
#This is like main. Program starts here
#==========================================
@app.route("/")  #this indicaates function below need to be executed
def index():
   
    #=================Step 2==================
    #This is where code will go to Mode USER 
    #to get data on whatever we are workin with
    #==========================================
    user = User.get_all()
    print(user)
    #======================Step 4=============================
    #after our model is called, data assigned, we go to next step 
    #==============================================================
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


@app.route ("/<int:user_id>")
def show_user(user_id):
    data = {
        "user_id": user_id
    }
    info = User.individualShow(data)
    return render_template("show.html", info = info)


#=====================step 8=========================
# we come back to edit 
#==============================================

@app.route("/<int:user_id>/edit")
def edit_user(user_id):
    data = {
        "user_id": user_id
    }
    info = User.individualShow(data)
    #=====================step 10=========================
    # we come back to edit 
    #==============================================
    return render_template("edit.html", info = info)

@app.route("/update_user/<int:user_id>", methods=["POST"])
def update(user_id):
    data = {
        #this side matches sql dtaa base == this side matches html declaration 
        "user_id": user_id,
        "first_name": request.form["fname"],
        "last_name" : request.form["lname"],
        "email" : request.form["email"]
    }
    User.individualEdit(data)
    return redirect(f"/{user_id}")


@app.route("/<int:user_id>/delete")
def edit_delete(user_id):
    data = {
        "user_id": user_id
    }
    info = User.individualDelete(data)
    return redirect("/")
    # return render_template("edit.html", info = info)

            
if __name__ == "__main__":
    app.run(debug=True)

#render_template: show me specific html. 
#redirect --redirects to desired place