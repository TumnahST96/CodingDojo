
from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"






@app.route('/<string:Phrase>/<int:times>/')
def index(Phrase, times):
    print("Dojo")
    return render_template("index.html", Phrase = Phrase, times = times)


    
# app.run(debug=True) should be the very last statement! 

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.