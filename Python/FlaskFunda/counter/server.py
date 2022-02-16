from flask import Flask, render_template,request, redirect, session


app = Flask(__name__)
app.secret_key = 'root' 
# our index route will handle rendering our form
@app.route('/' )
def index():
    
    if 'counter' not in session:
         session['counter'] = 0

    else:
        session['counter'] += 1
    return render_template("index.html")


@app.route('/reset', methods=['POST'])
def create_reset():
    session.clear()
    return redirect("/")

@app.route('/counter', methods=['POST'])
def create_user():
    
    return redirect("/")

    	 
    
# # adding this method
# @app.route("/show")
# def show_user():
#     print("Showing the User Info From the Form")
#     print(request.form)
#     return render_template('show.html', name_on_template=session['Click'], email_on_template=session['Reset'])
   





    
if __name__ == "__main__":
    app.run(debug=True)