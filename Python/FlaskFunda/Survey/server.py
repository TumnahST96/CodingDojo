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
    print(request.form)
    return render_template('show.html', name_on_template=session['Name'], location_on_template=session['Location'],
    language_on_template=session['Language'], comment_on_template=session['Comment'] )
    


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    session['Name'] = request.form['name']
    session['Location'] = request.form['location']
    session['Language'] = request.form['language']
    session['Comment'] = request.form['comment']
    return redirect("/show")



    
if __name__ == "__main__":
    app.run(debug=True)