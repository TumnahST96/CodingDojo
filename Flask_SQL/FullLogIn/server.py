from flask_app import app
from flask_app.controllers import teamscontroller
from flask_app.controllers import ownercontroller
from flask_app.controllers import usercontroller



if __name__ == "__main__":
    app.run(debug = True)