
from flask import Flask, render_template,request, redirect, session
import random


app = Flask(__name__)
app.secret_key = 'root' 
# our index route will handle rendering our form
@app.route('/' )
def index():
    return render_template("index.html")


# adding this method
@app.route("/show")
def show_user():
    print("Showing the User Info From the Form")
    
    return render_template('show.html' )
    


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    session['Name'] = request.form['name']
    session['Location'] = request.form['location']
    session['Language'] = request.form['language']
    session['Comment'] = request.form['comment']
    return redirect("/show")

# adding this method
@app.route("/reset", methods=["POST"])
def funks():
    
    
    return redirect('/' )

    
if __name__ == "__main__":
    app.run(debug=True)