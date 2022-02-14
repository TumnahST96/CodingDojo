from ast import Num
import imp
import re
from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"


# @app.route('/')
# def exper():
#     return "hey there"

@app.route('/Number/<int:num>')
def printStuff(num):
    if(num==35):
        print("HELLO")
        return "HELLO"
    elif(num==80):
        print("BYE")
        return "bye"

    # else:
    #     for i in num:
    #         print("DOGS")
    #         return "dogs"



@app.route('/users/<username>/<id>') # for a route '/users/____/____', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id


@app.route('/')
def index():
    print("Dojo")
    return render_template("index.html")



@app.route('/hello/<name>')          # The "@" decorator associates this route with the function immediately following
def hello_world(name):
    print(name)
    return 'Hello World! '+ name  # Return the string 'Hello World!' as a response


# import statements, maybe some other routes
    
@app.route('/success')
def success():
  return "success"
    
# app.run(debug=True) should be the very last statement! 

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.