from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"




# only color
@app.route('/<string:col1>')
def index( col1):
    
    return render_template("index.html", row = 8, col = 8, col1=col1)


# column num and color 
@app.route('/<int:col>/<string:col1>')
def index1( col, col1):
    
    return render_template("index.html", row = 8, col = col, col1=col1)


@app.route('/<int:row>/<int:col>/<string:col1>')
def index2(row, col, col1):
    
    return render_template("index.html", row = row, col = col, col1=col1)





if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)  
   