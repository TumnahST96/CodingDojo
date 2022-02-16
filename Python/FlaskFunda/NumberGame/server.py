from flask import Flask, render_template,request, redirect, session
import random


app = Flask(__name__)
app.secret_key = 'root' 
# our index route will handle rendering our form
@app.route('/' )
def index():
    if('guess' not in session):

        session['guess']=0
        session['num'] = random.randint(1, 100) 		# random number between 1-100
    

    return render_template("index.html")
    


@app.route('/guess', methods=['POST'])
def make_guess():
    session['guess'] = int(request.form['guess'])
    return redirect("/")

@app.route('/reset', methods=['POST'])
def create_user():
    
    return redirect("/guess")

    	 
    

   





    
if __name__ == "__main__":
    app.run(debug=True)