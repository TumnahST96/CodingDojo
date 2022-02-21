from flask import Flask, render_template

app = Flask(__name__)
from dojo import Dojo



@app.route("/")
def index():
    dojo = Dojo.all_dojo()
    return render_template("index.html", all_dojo = dojo)



























    



if __name__ == "__main__":
    app.run(debug=True)