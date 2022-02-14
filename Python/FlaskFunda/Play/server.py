from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"





@app.route('/<int:times>/<string:col1>')
def index(times, col1):
    
    return render_template("index.html", times = times, col1 = col1)







if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)  